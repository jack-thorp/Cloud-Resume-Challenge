import json
import boto3
from decimal import Decimal

# Defining dynamoDB table
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('jackthorp')

# Custom JSON encoder to handle Decimal types
class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, Decimal):
            return float(o)
        return super(DecimalEncoder, self).default(o)

def lambda_handler(event, context):
    try:
        query_params = event.get('queryStringParameters', {})
        callType = query_params.get('event', '').upper()
        
        if callType == 'SETCOUNT':
            response = table.get_item(Key={'id': '1'})
            
            if 'Item' not in response:
                return {
                    "statusCode": 404,
                    "body": json.dumps({"error": "Item not found"})
                }
            
            views = int(response['Item'].get('views', 0)) + 1
            
            table.put_item(
                Item={
                    'id': '1',
                    'views': views
                }
            )
            
            return {
                "statusCode": 200,
                "body": json.dumps({"message": "Count updated successfully", "views": views}, cls=DecimalEncoder)
            }
        
        elif callType == 'GETCOUNT':
            response = table.get_item(Key={'id': '1'})
            
            if 'Item' not in response:
                return {
                    "statusCode": 404,
                    "body": json.dumps({"error": "Item not found"})
                }
            
            views = int(response['Item'].get('views', 0))
            
            return {
                "statusCode": 200,
                "body": json.dumps({"views": views}, cls=DecimalEncoder)
            }
        
        else:
            return {
                "statusCode": 400,
                "body": json.dumps({"error": "Invalid parameter passed through call. Please call 'event' for either SETCOUNT or GETCOUNT."})
            }
    
    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": str(e)})
        }
