import * as cherry_core from 'cherry-cljs/cljs.core.js';
import confetti from 'canvas-confetti';
import React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
var Counter = (function (p__1) {
    let map__23 = p__1;
    let map__24 = cherry_core.__destructure_map.call(null, map__23);
    let name5 = map__24["name"];
    let vec__69 = useState.call(null, 0);
    let counter10 = cherry_core.nth.call(null, vec__69, 0, null);
    let setCount11 = cherry_core.nth.call(null, vec__69, 1, null);
    return React.createElement("div", { className: "container" },
        React.createElement("h1", null, cherry_core.str.call(null, "Hello, ", name5, "!")),
        " ",
        React.createElement("img", { className: "logo", alt: "logo", src: "https://livecodes.io/livecodes/assets/templates/cljs.svg" }),
        " ",
        React.createElement("p", null,
            "You clicked ",
            counter10,
            " times."),
        " ",
        React.createElement("button", { onClick: (function () {
                if (cherry_core.truth_(cherry_core._EQ_.call(null, cherry_core.mod.call(null, counter10, 3), 0))) {
                    confetti.call(null);
                }
                ;
                return setCount11.call(null, (counter10 + 1));
            }) }, "Click me"));
});
var title = "ClojureScript";
cherry_core.print.call(null, cherry_core.str.call(null, "Hello, ", title, "!"));
if (cherry_core.truth_((typeof root !== 'undefined'))) {
    null;
}
else {
    var root = createRoot.call(null, document.querySelector("#app"));
}
;
root.render(React.createElement(Counter, { name: title }));
export { Counter, title, root };
