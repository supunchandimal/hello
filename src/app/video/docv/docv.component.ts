import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AgoraClient, ClientEvent, NgxAgoraService, Stream, StreamEvent } from 'ngx-agora';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-docv',
  templateUrl: './docv.component.html',
  styleUrls: ['./docv.component.css']
})
export class DocvComponent implements OnInit {

  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;
  @ViewChild('profile') profile: TemplateRef<any>;

  title = 'angular-video';
  localCallId = 'agora_local';
  remoteCalls: string[] = [];

  private client: AgoraClient;
  private localStream: Stream;
  private uid: number;
  channelID: string;
  appointmentData: any;
  patientData: any;
  operationData: any[];
  medicineData: any[];
  allergiesData: any[];

  constructor(
    private ngxAgoraService: NgxAgoraService,
    public dialog: MatDialog,
    private router: Router,
    private db: AngularFirestore
  ) {
    this.channelID = localStorage.getItem('selectedChannelID_doctor');
    this.uid = Math.floor(Math.random() * 100);
  }

  ngOnInit() {
    console.log('channelIDDDDDDDDDDDDDDDD - ', this.channelID);
    this.startCall();
    this.db.collection('Appoinments', ref => ref.where('channelID', '==', this.channelID)).valueChanges()
      .subscribe(output => {
        this.appointmentData = output[0];
        console.log('appointmentIDDDDDDDDDDDDDDDD - ', this.appointmentData);
        this.db.collection('Users').doc(this.appointmentData.userId).valueChanges()
          .subscribe(output2 => {
            this.patientData = output2;
            console.log('patientIDDDDDDDDDDDDDDDD - ', this.appointmentData);
            this.db.collection('Opo', ref => ref.where('id', '==', this.appointmentData.userId)).valueChanges()
              .subscribe(output3 => {
                this.operationData = output3;
                console.log('operationIDDDDDDDDDDDDDDDD - ', this.operationData);
                this.db.collection('Meds', ref => ref.where('id', '==', this.appointmentData.userId)).valueChanges()
                  .subscribe(output4 => {
                    this.medicineData = output4;
                    console.log('medicineIDDDDDDDDDDDDDDDD - ', this.medicineData);
                    this.db.collection('Allegs', ref => ref.where('did', '==', this.appointmentData.userId)).valueChanges()
                      .subscribe(output5 => {
                        this.allergiesData = output5;
                        console.log('medicineIDDDDDDDDDDDDDDDD - ', this.allergiesData);

                      })
                  })
              })
          })
      })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  callAPI() {
    let dialogRef = this.dialog.open(this.callAPIDialog, {
      height: '600px',
      width: '600px',
    });

  }

  viewProfile() {
    let dialogRef = this.dialog.open(this.profile, {
      height: '600px',
      width: '600px',
    });
  }

  startCall() {
    this.client = this.ngxAgoraService.createClient({ mode: 'rtc', codec: 'h264' });
    this.assignClientHandlers();

    this.localStream = this.ngxAgoraService.createStream({ streamID: this.uid, audio: true, video: true, screen: false });
    this.assignLocalStreamHandlers();
    // Join and publish methods added in this step
    this.initLocalStream(() => this.join(uid => this.publish(), error => console.error(error)));
  }

  leave() {
    this.router.navigate(['/appointments'])
  }

  /**
   * Attempts to connect to an online chat room where users can host and receive A/V streams.
   */
  join(onSuccess?: (uid: number | string) => void, onFailure?: (error: Error) => void): void {
    this.client.join(null, this.channelID, this.uid, onSuccess, onFailure);
  }

  /**
   * Attempts to upload the created local A/V stream to a joined chat room.
   */
  publish(): void {
    this.client.publish(this.localStream, err => console.log('Publish local stream error: ' + err));
  }

  private assignClientHandlers(): void {
    this.client.on(ClientEvent.LocalStreamPublished, evt => {
      console.log('Publish local stream successfully');
    });

    this.client.on(ClientEvent.Error, error => {
      console.log('Got error msg:', error.reason);
      if (error.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.client.renewChannelKey(
          '',
          () => console.log('Renewed the channel key successfully.'),
          renewError => console.error('Renew channel key failed: ', renewError)
        );
      }
    });

    this.client.on(ClientEvent.RemoteStreamAdded, evt => {
      const stream = evt.stream as Stream;
      this.client.subscribe(stream, { audio: true, video: true }, err => {
        console.log('Subscribe stream failed', err);
      });
    });

    this.client.on(ClientEvent.RemoteStreamSubscribed, evt => {
      const stream = evt.stream as Stream;
      const id = this.getRemoteId(stream);
      if (!this.remoteCalls.length) {
        this.remoteCalls.push(id);
        setTimeout(() => stream.play(id), 1000);
      }
    });

    this.client.on(ClientEvent.RemoteStreamRemoved, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = [];
        console.log(`Remote stream is removed ${stream.getId()}`);
      }
    });

    this.client.on(ClientEvent.PeerLeave, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = this.remoteCalls.filter(call => call !== `${this.getRemoteId(stream)}`);
        console.log(`${evt.uid} left from this channel`);
      }
    });
  }

  private assignLocalStreamHandlers(): void {
    this.localStream.on(StreamEvent.MediaAccessAllowed, () => {
      console.log('accessAllowed');
    });

    // The user has denied access to the camera and mic.
    this.localStream.on(StreamEvent.MediaAccessDenied, () => {
      console.log('accessDenied');
    });
  }

  private initLocalStream(onSuccess?: () => any): void {
    this.localStream.init(
      () => {
        // The user has granted access to the camera and mic.
        this.localStream.play(this.localCallId);
        if (onSuccess) {
          onSuccess();
        }
      },
      err => console.error('getUserMedia failed', err)
    );
  }

  private getRemoteId(stream: Stream): string {
    return `agora_remote-${stream.getId()}`;
  }
}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog { }