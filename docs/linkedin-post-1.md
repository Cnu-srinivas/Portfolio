The most useful line in any AI assistant's prompt is the one that tells it to stop.

Gartner expects over 40% of agentic AI projects to be cancelled by the end of 2027 (June 2025 forecast). The reasons it lists are cost, unclear value and weak risk controls. Not wrong answers. Wrong behaviour when there is no good answer.

A pattern I have seen more than once, in more than one industry:

The demo answers every question. The production system has to refuse some.

An assistant in a regulated field has to hand a red-flag case to a person instead of improvising.

A ticketing agent has to recognise the ticket it already filed instead of filing it twice.

A phone agent has to say it did not catch the answer instead of recording a guess.

None of that is model work. It is a guardrail, a duplicate check, a confidence threshold, and a fallback for the day the model API returns 503. Boring parts. They are also the parts that decide whether the team still trusts the system in month three.

So the build order I have settled on: the stop conditions first, the evaluation set second, the clever prompt last.

If you run an assistant in production: what happens in yours when the model times out?
