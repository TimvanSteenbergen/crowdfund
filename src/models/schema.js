export const schema = {
    "models": {},
    "enums": {
        "ModelAttributeTypes": {
            "name": "ModelAttributeTypes",
            "values": [
                "binary",
                "binarySet",
                "bool",
                "list",
                "map",
                "number",
                "numberSet",
                "string",
                "stringSet",
                "_null"
            ]
        },
        "PaymentType": {
            "name": "PaymentType",
            "values": [
                "VISA",
                "BITCOIN",
                "BOGUS",
                "DANKORT",
                "DINERS_CLUB",
                "DISCOVER",
                "DOGECOIN",
                "FORBRUGSFORENINGEN",
                "JCB",
                "LITECOIN",
                "MAESTRO",
                "MASTERCARD",
                "PAYPAL",
                "AMERICAN_EXPRESS",
                "BUNQ"
            ]
        },
        "ModelSortDirection": {
            "name": "ModelSortDirection",
            "values": [
                "ASC",
                "DESC"
            ]
        }
    },
    "nonModels": {
        "ModelCampaignConnection": {
            "name": "ModelCampaignConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "Campaign"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Campaign": {
            "name": "Campaign",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "CampaignImage": {
                    "name": "CampaignImage",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "FundraiserImage": {
                    "name": "FundraiserImage",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "FundraiserName": {
                    "name": "FundraiserName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "FundraiserText": {
                    "name": "FundraiserText",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "FundraiserSocialnumber": {
                    "name": "FundraiserSocialnumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "QRcodeImage": {
                    "name": "QRcodeImage",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "IsActive": {
                    "name": "IsActive",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "StartDate": {
                    "name": "StartDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "EndDate": {
                    "name": "EndDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "Donations": {
                    "name": "Donations",
                    "isArray": false,
                    "type": {
                        "nonModel": "ModelDonationConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "ModelDonationConnection": {
            "name": "ModelDonationConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "Donation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Donation": {
            "name": "Donation",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PaymentType": {
                    "name": "PaymentType",
                    "isArray": false,
                    "type": {
                        "enum": "PaymentType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "campaignID": {
                    "name": "campaignID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                }
            }
        }
    },
    "version": "f5ca5a2586b9eb8a9b4c9af4a0150448"
};