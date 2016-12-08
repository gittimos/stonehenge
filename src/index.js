"use strict";
var Alexa = require("alexa-sdk");
var APP_ID = "amzn1.ask.skill.f308e73d-10a6-41e5-a81c-8a99bb65d8ab";

var languageStrings = {
    "de-DE": {
        "translation": {
            "FACTS": [
                "Stonehenge wurde in der Jungsteinzeit errichtet.",
                "Stonehenge steht in der Nähe von Amesbury in Wiltshire, England, etwa 13 Kilometer nördlich von Salisbury.",
                "Stonehenge besteht aus einer Grabenanlage, die von einer aus mehreren konzentrischen Steinkreisen gebildeten Megalithstruktur umgeben ist.",
                "Weitere Megalithe sowie zwei Hügelgräber finden sich in unmittelbarer Nähe von Stonehenge.",
                "Stonehenge war möglicherweise ein Kult- und Versammlungsplatz. Darauf weisen Symbole von Äxten und Muttergottheiten hin.",
                "Stonehenge war möglicherweise eine religiöse Tempelanlage und Begräbnisstätte. Darauf weisen einzelne Funde hin.",
                "Stonehenge war möglicherweise ein astronomisches Observatorium, weil einige Linien nach der Sommersonnenwende ausgerichtet sind.",
                "Die Entstehung der Anlage lässt sich grob in drei Phasen unterteilen: Die Frühphase der Anlage, mit einem kreisrunden Erdwall und einem Graben, wird auf etwa 3100 vor Christus datiert. Pfostenlöcher weisen darauf hin, dass im frühen dritten Jahrtausend v. Chr. eine hölzerne Struktur im Inneren der Einfassung existiert haben muss. Die auffällige Megalithstruktur wurde etwa zwischen 2500 v. Chr. und 2000 v. Chr. errichtet.",
                "Die gesamte Anlage ist vermutlich deutlich älter als bisher angenommen. Demnach stand die Megalithstruktur bereits um 3000 vor Christus. Die weiteren Ausführungen im Artikel beziehen sich auf die bisher angenommene Datierung. Neueste Forschungen legen eine mindestens 11.000 Jahre lange Geschichte der Anlage nahe.",
                "Die UNESCO erklärte Stonehenge im Jahr 1986 zum Weltkulturerbe.",
                "Der Name Stonehenge stammt aus dem Altenglischen und bedeutet so viel wie 'hängende Steine'.",
                "Der zweite Bestandteil des Namens, Henge, wird heute als archäologische Bezeichnung für eine Klasse jungsteinzeitlicher Bauwerke verwendet, die aus einer kreisförmigen, erhöhten Einfriedung mit einer innen liegenden Vertiefung bestehen.",
                "Stonehenge gehört seit 1918 dem englischen Staat. Verwaltet und touristisch erschlossen wird Stonehenge vom English Heritage, seine Umgebung vom National Trust.",
                "Die erste namentliche Erwähnung von Stonehenge liefert Henry von Huntingdon um das Jahr 1130 in seiner 'Geschichte Englands'.",
                "Zwischenzeitlich bot ein Schmied des nahegelegenen Ortes Amesbury Touristen einen Hammer zum Verleih, die sich damit Stückchen von den Steinen als Souvenir abschlagen konnten.",
                "Es gibt viele Spekulationen darüber, wie Stonehenge gebaut wurde. Schätzungen gehen davon aus, dass mehr als 20 Millionen Arbeitsstunden für Transport und Bearbeitung der Steine benötigt wurden.",
                "Die auf den Sarsensteinen eingravierten Darstellungen von Waffen sind in der Megalith-Kunst auf den britischen Inseln einzigartig.",
                "Stonehenge wird heute von Anhängern neuheidnischen Glaubens, darunter Druiden, religiös genutzt."
            ],
            "SKILL_NAME" : "Wissen über Stonehenge.",
            "GET_FACT_MESSAGE" : "Hier ist dein Fakt: ",
            "HELP_MESSAGE" : "Du kannst sagen, 'Nenne mir einen Fakt über Stonehenge', oder du kannst 'Beenden' sagen.",
            "HELP_REPROMPT" : "Wie kann ich dir helfen?",
            "STOP_MESSAGE" : "Auf Wiedersehen!",
            "UNHANDLED_MESSAGE": "Das verstehe ich leider nicht."
        }
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = "amzn1.ask.skill.f308e73d-10a6-41e5-a81c-8a99bb65d8ab";
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    "LaunchRequest": function () {
        this.emit("GetNewFactIntent");
    },
     "StartIntent": function () {
        this.emit("GetNewFactIntent");
    },
    "GetNewFactIntent": function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        var factArr = this.t("FACTS");
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(":tellWithCard", speechOutput, this.t("SKILL_NAME"), randomFact)
    },
    "HelpIntent": function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(":ask", speechOutput, reprompt);
    },
    "StopIntent": function () {
        this.emit(":tell", this.t("STOP_MESSAGE"));
    },
    "Unhandled": function () {
        this.emit(":tell", this.t("UNHANDLED_MESSAGE"));
    }
};