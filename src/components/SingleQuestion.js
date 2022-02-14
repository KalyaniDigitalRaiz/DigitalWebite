import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
 
  rows: [
    {
      title: "Java Developer(3+ Years)",
      content: "<h4>Description:</h4> <h4><ul class=skill>Skill Required :</ul></h4> <p class=java>Java , Spring, SpringBoot.</p> <p class=java>Web Services , microservices.</p> <p class=java>Any RDBMS ( Oracel , DB2 ,Mysql , postgre SQL etc. )</p> <h2 class =apply><a class=button apply2 href=mailto:info@DigitalRaiz.com>Apply Now</a>  <a class=apply-mobile-bottom href=mailtoinfo@DigitalRaiz.com>or Mail Your Resume to info@DigitalRaiz.com</a>",
    
    },
    {
      title: "Java Developer(5+ Years)",
      content: "<h4>Description:</h4> <h4><ul class=skill>Skill Required :</ul></h4> <p class=java>Java , Spring, SpringBoot.</p> <p class=java>Web Services , microservices.</p> <p class=java>Any RDBMS ( Oracel , DB2 ,Mysql , postgre SQL etc. )</p> <h2 class =apply><a class=button apply2 href=mailto:info@DigitalRaiz.com>Apply Now</a>  <a class=apply-mobile-bottom href=mailtoinfo@DigitalRaiz.com>or Mail Your Resume to info@DigitalRaiz.com</a>"
    },
    {
      title: "	Technical Analyst",
      content: "<h4>Description:</h4> <h4><ul class=skill>Responsibilites :</ul></h4><p class=inter>- Interact with internal and external stakeholders to understand the product  or change  requirements</p> <p class=inter>- Analyze , discuss and design functional specifications</p> <p class=inter>-Assess impact of the change or proposed solution on the existing product or platform if it is applicable.</p><p class=inter>- Coordinate with developers to build and implement technology solutions</p><p class=inter>- Prepare technical solution document including pictorial representation of the requirement wherever needed.</p><p class=inter>- Present the requirement and solution approach in simple format so that the development and the external stake holders can understand easily.</p><p class=inter>- Provide technical training in the domain under scope</p><p class=inter>-Support for assessing design impacts on capacity augmentation or software version upgrades for  both application  and OS.</p><p class=inter>- Keep abreast of technology trends and developments</p><p class=inter>-Support in life in design related issues</p> <p class=inter>Support in exploring technology innovation and efficient use of technology trend to stay on par with market in the areas of operation</p><h2 class=skill>Requirement :</h2><p class=inter>-Should have a minimum work experience of 4+years  in the similar field of solution architect and product  specification design.</p><p class=inter>-Should be a graduate  from a technical institution</p><p class=inter>- Knowledge of databases, system security and troubleshooting skills</p><p class=inter>- Familiarity with technical terminologies which will help the development team while coding.</p><p class=inter>-Should be familiar with widely used open source components.</p><h2 class =apply><a class=button apply2 href=mailto:info@DigitalRaiz.com>Apply Now</a>  <a class=apply-mobile-bottom href=mailtoinfo@DigitalRaiz.com>or Mail Your Resume to info@DigitalRaiz.com</a>"
      
    },
    {
      title: "PHP Developer",
      content: "<h4>Description:</h4> <p class=skill>Strong knowledge on PHP</p><p class=skill>Must have one framwork ie, Codeigniter, Laravell, yii2</p><p class=skill>Cooperating with the back-end developer in the process of building the RESTful API</p> <p class=skill>Communicating with external web services</p><p class=skill>Experience on MySQL</p><p class=skill>Better to have a knowledge on Node JS and Mongo DB</p><p class=skill>Experience in front end technologies like HTML, CSS, BootStrap, Angular</p><p class=skill>Creating database schemas that represent and support business processes</p> <h2 class =apply><a class=button apply2 href=mailto:info@DigitalRaiz.com>Apply Now</a>  <a class=apply-mobile-bottom href=mailtoinfo@DigitalRaiz.com>or Mail Your Resume to info@DigitalRaiz.com</a>"
    },
    {
      title: "Angular Developer",
      content: "<h4>Description:</h4> <p class=hire>We're hiring Angular Developer (Exp 1 to 3 yrs)</p><p class=inter>- Experience in developing front end development using HTML, CSS/scss, JavaScript, Angular 7+ (preferred 9+)</p><p p class=inter>- Strong knowledge and experience in Angular 9+</p> <p class=inter>- Strong knowledge of developing custom component libraries</p><p p class=inter>- Strong analytical, problem solving and design skills</p><p p class=inter>- Strong knowledge in writing unit testing and e2e testing</p><p class=inter>- Strong exposure to performance and optimization of frontend applications</p><p class=inter>- Good communication, organizational skill</p><h2 class =apply><a class=button apply2 href=mailto:info@DigitalRaiz.com>Apply Now</a>  <a class=apply-mobile-bottom href=mailtoinfo@DigitalRaiz.com>or Mail Your Resume to info@DigitalRaiz.com</a>"
    },
    {
      title: "Android Developer",
      content: "<h4>Description:</h4> <p class=inter>We are hiring Android Developer (Exp 1 to 3 yrs) Design, Build & Maintain high performance, reusable code Expertise with Android UI Design, Able to Design to implement<br/> any UI Design</p><h2 class =apply><a class=button apply2 href=mailto:info@DigitalRaiz.com>Apply Now</a>  <a class=apply-mobile-bottom href=mailtoinfo@DigitalRaiz.com>or Mail Your Resume to info@DigitalRaiz.com"
    },
    {
      title: "Node JS Developer",
      content: "<h4>Description:</h4>, <p class=inter>We're Hiring Nodejs Developer (EXP: 1 to 3 yrs)</p><p class=inter>Strong proficiency in javascript strong expertise in working with Node JS and other tools related to React front end development</p><h2 class =apply><a class=button apply2 href=mailto:info@DigitalRaiz.com>Apply Now</a>  <a class=apply-mobile-bottom href=mailtoinfo@DigitalRaiz.com>or Mail Your Resume to info@DigitalRaiz.com"
      
    },
   ]  
}

export default class App extends Component {
  render() {
    return (
      <div >
        <Faq data={data}/>
      </div>
    )
  }
}