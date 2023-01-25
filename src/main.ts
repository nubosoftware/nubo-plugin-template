import { CoreModule, PluginModule, Server, Login, GetLogin, Common } from 'nubo-plugin-api';

import { Logger } from "nubo-plugin-api/lib/common";
import { StaticPlugIn } from 'nubo-plugin-api/lib/pluginModule';
import { PluginInitResponse, PluginConfigurationDesciption } from 'nubo-plugin-api/lib/pluginModule';
import { Request, Response, Route } from "nubo-plugin-api/lib/server";



const confDesc: PluginConfigurationDesciption[] = [    
    // insert your configuration description here
    // {
    //     key: "testString",
    //     name: "Test String",
    //     dataType: "string",
    //     defaultValue: ""
    // },
    // {
    //     key: "testObject",
    //     name: "Test Object",
    //     dataType: "object",
    //     defaultValue: ""
    // },
    // {
    //     key: "testArray",
    //     name: "Test Array",
    //     dataType: "array",
    //     defaultValue: ""
    // },
    // {
    //     key: "testBoolean",
    //     name: "Test Boolean",
    //     dataType: "boolean",
    //     defaultValue: ""
    // },
    // {
    //     key: "testNumber",
    //     name: "Test Number",
    //     dataType: "number",
    //     defaultValue: ""
    // },
];

type PublicServerRoute = {
    server: Server;
    route: Route;
}

type Configuration = {    
}




class MyModule implements PluginModule {
    coreModule!: CoreModule;
    logger!: Logger;
    initizalized = false;
    configuration: Configuration = {         
    };
    

    /**
     * return the configuration description
     * @returns 
     */
    getConfDesciptions(): PluginConfigurationDesciption[] {
        return confDesc;
    }


    /**
     * Initialize the module
     * @param _coreModule 
     * @param _configuration 
     * @returns 
     */
    init(_coreModule: CoreModule, _configuration?: any): PluginInitResponse {
        this.coreModule = _coreModule;               
        this.logger = this.coreModule.Common.getLogger("PLUGIN");
        
        this.initizalized = true;
        this.logger.info("[PLUGIN] initialized!");        
        return {              
            staticFoldersPlugins: [{
                path: "assets/admin_plugin",
                staticFolder: "admin"
            }]         
        };
    }
    deinit() {
        if (this.initizalized) {
            this.initizalized = false;
            this.coreModule = undefined!;
            this.logger.info("[PLUGIN] deinitialized!");            
        }
    }    

}

export const myModule = new MyModule();

export function getPluginModule(): PluginModule {
    return myModule;
}


export function getCoreModule(): CoreModule {
    if (!myModule.initizalized) {
        throw new Error("Module not initialized!");
    }
    return myModule.coreModule;
}










  
    