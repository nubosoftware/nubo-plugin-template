
const routes = [
    // enter your custom routes here
];

const customLocales = {  
    // enter your custom locales here  
    // 'en': {
    //     "Users" : "Users*",
    //     "Platforms": "Platforms*"
    // }    
}

const customDisabledMenuItems = [ 
    // enter your custom disabled menu items here
    // "Organizations",
    // "Profiles",
    // "Groups",
    // "Apps",
    // "Telephony",
    // "Platforms",
    // "Logs",
    // "Recordings",
    // "Firewalls",
    // "EmailSetup",
    // "LDAP",
    // "Reports",
    // "Settings",
    // "Security",
    // "Admins",
];


let customMenuItems = [
    // enter your custom menu items here
    // {
    //     title: 'My Profiles',
    //     icon: 'mdi-account',
    //     link: '/MyProfiles',
    // }
];

let plugin = {
    initPlugin: () => {
//         console.log(`
// initPlugin.
// routes: ${JSON.stringify(routes,null,2)}, 
// customLocales: ${JSON.stringify(customLocales,null,2)}, 
// customDisabledMenuItems: ${JSON.stringify(customDisabledMenuItems,null,2)}, 
// customMenuItems: ${JSON.stringify(customMenuItems,null,2)} 
//         `);        
    },
    routes,
    customLocales,
    customDisabledMenuItems,
    customMenuItems,
}



//export default plugin
module.exports = plugin;