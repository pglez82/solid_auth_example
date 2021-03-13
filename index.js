import { SolidNodeClient } from 'solid-node-client';
const client = new SolidNodeClient();

async function accessPublicPart(){
  // fetch & display a public resource
  let response = await client.fetch('https://podtest1.solidcommunity.net/public/test.md');
  console.log(await response.text());
  
}

async function accessPrivatePart(){
    // login, then fetch & display a private resource
    let session = await client.login({
        idp : "https://solidcommunity.net",
        username : "podtest1",
        password : "Xz7DnjcHxadEhaN",
      });
    if( session.isLoggedIn ) {
        console.log (`logged in as <${session.webId}>`);
        let response = await client.fetch('https://podtest1.solidcommunity.net/private/test.md');
        console.log(await response.text())
    }    
}

accessPublicPart()
accessPrivatePart()