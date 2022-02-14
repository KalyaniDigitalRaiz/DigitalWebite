import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Home  from "./components/Home";
import  About  from "./components/About";
import Portfolio from "./components/Portfolio"
import Blog from "./components/Blog";
import Services from "./components/Services";
import Career from "./components/Career";

import Product from "./components/Product";
import { Contactus } from "./components/Contactus";
import DeepLearning from "./Pages/DeepLearning";

import AngularDevelopment from "./Pages/AngularDevelopment";
import ReactJSDevelopment from "./Pages/ReactJSDevelopment";
import NodeJSDevelopment from "./Pages/NodeJSDevelopment";
import PHPDevelopment from "./Pages/PHPDevelopment";
import MongoDBDevelopment from "./Pages/MongoDBDevelopment";
import MachineLearningandArtificialIntelligence from "./Pages/MachineLearningandArtificialIntelligence";
import MachineLearning from "./Pages/MachineLearning";
 import DataScience from "./Pages/DataScience";
 import ArtificalIntelligence from "./Pages/ArtificalIntelligence";
import CustomEnterpriseSoftwareDevelopment from "./Pages/CustomEnterpriseSoftwareDevelopment";
import ApplicationDesign from "./Pages/ApplicationDesign";
import EnterpriseWebampMobileApplication from "./Pages/EnterpriseWebampMobileApplication";
import EnterpriseSolutions from "./Pages/EnterpriseSolutions";
import EnterpriseApplicationIntegration from "./Pages/EnterpriseApplicationIntegration";
import LegacyAppUpgradeandModernization from "./Pages/LegacyAppUpgradeandModernization";
import DigitalMarketing from "./Pages/DigitalMarketing";
import SearchEngineOptimization from "./Pages/SearchEngineOptimization";
import SocialMediaMarketing from "./Pages/SocialMediaMarketing";
import SocialMediaOptimization from "./Pages/SocialMediaOptimization";
import SearchEngineMarketing from "./Pages/SearchEngineMarketing";
import Payperclick from "./Pages/Payperclick";
import Prototypes from "./Pages/Prototypes";
import WireframeDesign from "./Pages/WireframeDesign";
import WebDesign from "./Pages/WebDesign";
import WebDesignDevelopment from "./Pages/WebDesignDevelopment";

import AndroidAppsDevelopment from "./Pages/AndroidAppsDevelopment";
import iOSAppsDevelopment from "./Pages/iOSAppsDevelopment";
import IonicAppsDevelopment from "./Pages/IonicAppsDevelopment";
import WearableAppsDevelopment from "./Pages/WearableAppsDevelopment";
import InternetofThings from "./Pages/InternetofThings";
import IoTforWearables from "./Pages/IoTforWearables";
import IoTforHealthcare from "./Pages/IoTforHealthcare";
import IoTforTransport from "./Pages/IoTforTransport";
import IoTforRetail from "./Pages/IoTforRetail";
import ITconsulting from "./Pages/ITconsulting";
import TechSupport from "./Pages/TechSupport";
import MobileApplicationDevelopment from "./Pages/MobileApplicationDevelopment";

import UXUIDesign from "./Pages/UXUIDesign";

function App() {
  return (

    <>
      <Router>
        
        
        <div >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Blog" component={Blog} />
            <Route path="/contactus" component={Contactus} />
            <Route path="/Services" component={Services} />
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/career" component={Career} />
            <Route path="/product" component={Product} />
            <Route path="/DeepLearning" component={DeepLearning} />
            <Route path="/AndroidAppsDevelopment" component={AndroidAppsDevelopment} />
            <Route path="/AngularDevelopment" component={AngularDevelopment} />
            <Route path="/ReactJSDevelopment" component={ReactJSDevelopment} />
            <Route path="/NodeJSDevelopment" component={NodeJSDevelopment} />
            <Route path="/PHPDevelopment" component={PHPDevelopment} />
            <Route path="/MongoDBDevelopment" component={MongoDBDevelopment} />
            <Route path="/MachineLearning" component={MachineLearning}/>
            <Route path="/DataScience" component={DataScience}/>
            <Route path="/ArtificalIntelligence" component={ArtificalIntelligence}/>
            <Route path="/CustomEnterpriseSoftwareDevelopment" component={CustomEnterpriseSoftwareDevelopment}/>
            <Route path="/ApplicationDesign" component={ApplicationDesign}/>
            <Route path="/EnterpriseWebampMobileApplication" component={EnterpriseWebampMobileApplication}/>
            <Route path="/EnterpriseSolutions"component={EnterpriseSolutions}/>
            <Route path="/EnterpriseApplicationIntegration"component={EnterpriseApplicationIntegration}/>
            <Route path="/LegacyAppUpgradeandModernization"component={LegacyAppUpgradeandModernization}/>
            <Route path="/DigitalMarketing"component={DigitalMarketing}/>
            <Route path="/SearchEngineOptimizationg"component={SearchEngineOptimization}/>
            <Route path="/SocialMediaMarketing"component={SocialMediaMarketing}/>
            <Route path="/ SocialMediaOptimization"component={SocialMediaOptimization}/>
            <Route path="/ Prototypes"component={Prototypes}/>
            <Route path="/ SearchEngineMarketing"component={SearchEngineMarketing}/>
            <Route path="/ Payperclick"component={Payperclick}/>
            <Route path="/ WireframeDesign"component={WireframeDesign}/>
            <Route path="/ WebDesign"component={WebDesign}/>
            <Route path="/WebDesignDevelopment"component={WebDesignDevelopment}/>
            <Route path="/AndroidAppsDevelopment"component={AndroidAppsDevelopment}/>
            <Route path="/IOSAppsDevelopment"component={iOSAppsDevelopment}/>
            <Route path="/IonicAppsDevelopment"component={IonicAppsDevelopment}/>
            <Route path="/WearableAppsDevelopment"component={WearableAppsDevelopment}/>
            <Route path="/InternetofThings"component={InternetofThings}/>
            <Route path="/IoTforWearables"component={IoTforWearables}/>
            <Route path="/IoTforHealthcare"component={IoTforHealthcare}/>
            <Route path="/IoTforTransport"component={IoTforTransport}/>
            <Route path="/IoTforRetail"component={IoTforRetail}/>
            <Route path="/ITconsulting"component={ITconsulting}/>
            <Route path="/TechSupport" component={TechSupport}/>
            <Route path="/MobileApplicationDevelopment" component={MobileApplicationDevelopment}/>
            <Route path="/ApplicationDesign" component={ApplicationDesign}/>
            <Route path="/UXUIDesign" component={UXUIDesign}/>


            
            </Switch>
        </div>
      </Router>
     
    </>
  );
}

export default App;