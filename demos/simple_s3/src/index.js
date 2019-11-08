"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const s3 = require("@aws-cdk/aws-s3");
class HelloCdkStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        new s3.Bucket(this, 'MyFirstBucket', {
            bucketName: "demo-for-you-all",
        });
    }
}
exports.HelloCdkStack = HelloCdkStack;
const app = new cdk.App();
new HelloCdkStack(app, 'StoreStack');
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFzQztBQUN0QyxzQ0FBdUM7QUFFdkMsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDMUMsWUFDRSxLQUFjLEVBQ2QsRUFBVSxFQUNWLEtBQXNCO1FBRXRCLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ25DLFVBQVUsRUFBRSxrQkFBa0I7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBWkQsc0NBWUM7QUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFJLGFBQWEsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDckMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNkayA9IHJlcXVpcmUoJ0Bhd3MtY2RrL2NvcmUnKTtcbmltcG9ydCBzMyA9IHJlcXVpcmUoJ0Bhd3MtY2RrL2F3cy1zMycpO1xuXG5leHBvcnQgY2xhc3MgSGVsbG9DZGtTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHNjb3BlOiBjZGsuQXBwLFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcHJvcHM/OiBjZGsuU3RhY2tQcm9wc1xuICApIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIG5ldyBzMy5CdWNrZXQodGhpcywgJ015Rmlyc3RCdWNrZXQnLCB7XG4gICAgICBidWNrZXROYW1lOiBcImRlbW8tZm9yLXlvdS1hbGxcIixcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xubmV3IEhlbGxvQ2RrU3RhY2soYXBwLCAnU3RvcmVTdGFjaycpO1xuYXBwLnN5bnRoKCk7XG4iXX0=