import React from "react";
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import {json} from '../examplequestions/examplequestions';


const ExampleSurvey = () => {
    return ( 
        <Survey.Survey
        json={json}
        />
     );
}
 
export default ExampleSurvey;