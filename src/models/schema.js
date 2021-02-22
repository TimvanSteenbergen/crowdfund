export const schema = {
    "models": {
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
                    "isArray": true,
                    "type": {
                        "model": "Donation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "campaignID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Campaigns",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "read",
                                    "create",
                                    "update",
                                    "delete"
                                ],
                                "provider": "iam"
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ],
                                "provider": "iam"
                            }
                        ]
                    }
                }
            ]
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
                }
            },
            "syncable": true,
            "pluralName": "Donations",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCampaign",
                        "fields": [
                            "campaignID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "read"
                                ],
                                "provider": "iam"
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "read",
                                    "create"
                                ],
                                "provider": "iam"
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
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
        }
    },
    "nonModels": {},
    "version": "7406e535cbca3c3789943868aacdc1ca"
};