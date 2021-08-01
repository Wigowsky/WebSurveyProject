export const json = {
        questions: [
        {
        "type": "rating",
        "name": "Jak bardzo jesteś szczęśliwy w zespole?",
        "title": {
        "default": "Jak bardzo jesteś szczęśliwy w zespole?",
        "pl": "Rating Question"
        },
        "isRequired": true,
        "rateMax": 10,
        "minRateDescription": {
        "default": "Bardzo nieszczęśliwy",
        "pl": "Min"
        },
        "maxRateDescription": {
        "default": "Bardzo szczęśliwy",
        "pl": "Max"
        }
        },
        {
        "type": "comment",
        "name": "Co sprawia, że czujesz się teraz dobrze?",
        "title": {
        "default": "Co sprawia, że czujesz się teraz dobrze?",
        "pl": "Simple question with text area to answer"
        },
        "isRequired": true
        },
        {
        "type": "comment",
        "name": "question2",
        "title": {
        "default": "Co sprawia, że czujesz się teraz dobrze?",
        "pl": "Simple question with setings like read only but not required"
        },
        "readOnly": true
        },
        {
        "type": "comment",
        "name": "Co może podnieść Twój happiness index?",
        "title": {
        "default": "Co może podnieść Twój happiness index?",
        "pl": "Simple question with validation"
        },
        "isRequired": true,
        "validators": [
        {
        "type": "text",
        "text": {
        "pl": "TAK"
        },
        "minLength": 0,
        "maxLength": 0,
        "allowDigits": true
        },
        {
        "type": "text",
        "text": {
        "pl": "NIE"
        },
        "minLength": 0,
        "maxLength": 0,
        "allowDigits": true
        }
        ]
        },
        {
        "type": "checkbox",
        "name": "question1",
        "title": {
        "pl": "Simple checkbox with other description"
        },
        "hasComment": true,
        "choices": [
        "item1",
        "item2",
        "item3"
        ]
        },
        {
        "type": "radiogroup",
        "name": "question3",
        "title": {
        "pl": "Simple Radiogroup"
        },
        "choices": [
        "item1",
        "item2",
        "item3"
        ]
        },
        {
        "type": "dropdown",
        "name": "question4",
        "title": {
        "pl": "Simple dropdown"
        },
        "choices": [
        "item1",
        "item2",
        "item3",
        "item4"
        ]
        },
        {
        "type": "boolean",
        "name": "question5",
        "title": {
        "pl": "Simple Boolean"
        }
        },
        {
        "type": "matrix",
        "name": "question6",
        "title": {
        "pl": "Simple Matrix"
        },
        "columns": [
        "Column 1",
        "Column 2",
        "Column 3"
        ],
        "rows": [
        "Row 1",
        "Row 2"
        ]
        }
        ]
    };