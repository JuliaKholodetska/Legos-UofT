export const defaultEditorsValue = {
    firstDefault: "def greet(name):\n \\\ \n This function greets to\n the person passed in as\n a parameter\n \\\ \n print('Hello, ' + name + '. Good morning!')\n\n\n\n\n\n\n\n\n\n\n\n\n",
    secondDefault: "print(Hello world)\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
    thirdDefault: "option to do\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
}

export const defaultCompletions = [
    { "label": "NOT", "type": "constant", "info": "NOT (arg)" },
    { "label": "AND", "type": "constant", "info": "AND ([args])" },
    { "label": "EQ", "type": "constant", "info": "EQ (left, right)" },
    { "label": "NEQ", "type": "constant", "info": "NEQ (left, right)" },
    { "label": "OR", "type": "constant", "info": "OR ([args])" },
    { "label": "LT", "type": "constant", "info": "LT (left, right)" },
    { "label": "GT", "type": "constant", "info": "GT (left, right)" },
    { "label": "ITE", "type": "constant", "info": "ITE (cond, left, right)" },
    { "label": "IFF", "type": "constant", "info": "IFF (left, right)" },
    { "label": "forall", "type": "constant", "info": "forall (action, function)" },
    { "label": "exist", "type": "constant", "info": "exist (self, input_type, function)" },
    { "label": "Implication", "type": "constant", "info": "Implication (right, left)" },
    { "label": "previous", "type": "constant", "info": "previous (Action_class, idenifier_func, func, current_time = Int(0))" },
    { "label": "next", "type": "constant", "info": "next (Action_class, idenifier_func, func, current_time = Int(0))" },
    { "label": "current", "type": "constant", "info": "current (Action_class, idenifier_func, func, current_time = Int(0))" },
    { "label": "eventually", "type": "constant", "info": "eventually (EAction_class, func, current_time = Int(0))" },
    { "label": "once", "type": "constant", "info": "once (Action_class, func, current_time)" },
    { "label": "until", "type": "constant", "info": "until (EAction, func, Faction, func1, current_time)" },
    { "label": "since", "type": "constant", "info": "since (EAction, func, Faction, func1, current_time)" },
]
