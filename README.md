# Building a Portfolio Website with React
Code for the project we made in the video searies on youtube

[Watch Series Here](https://www.youtube.com/playlist?list=PLnpdZyv-BjINbUjmTUsyziHz_4fa9hM5G)

Changing the pages:
- the menu is in src\App.js
- the pages are in src\pages

Changing the data model:
- open [graphql](amplify\backend\api\notesapp\schema.graphql )and add your changes
- commandline from project's root directory: amplify push --y This will push the changes, and create the functions (create, read, modify and delete)
Todo: find out how the hell the Datamodeling in the Amplify AdminUI works. 
Todo: find out how I can see my database and its content. Where is it?

Changing authorizations:
- add @Auth tags to the data elements
Current status: The following types do not have '@auth' enabled. Consider using @auth with @model
         - Campaign
         - Donation
Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/auth


Todos:
- add authentication and make sure every Crowdfundraiser can modify her own crowdfundraiser.
- style it 
- Donations: the best way is donors doing one payment where 99% is paid to the fundraiser bankaccount and 1 % to the crowdfund bankaccount
- have a landing page per campaign
- find a way to make each donation get split automatically between the fundraiser and 2% to crowdfund.
- Done. Create a seperate CreateCampaignPage. 

