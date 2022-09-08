// Prefix for all classes
const mohidPrefix = "";

/////////////////////////////
////// JIT Compilation //////
/////////////////////////////

// Fetching all elements of document
const jitEveryElement = document.body.getElementsByTagName("*");

// Object to particular jit classes
let jitAllowedProps = {
  "color":                  mohidPrefix + "color",
  "background":             mohidPrefix + "bg",
  "background-color":       mohidPrefix + "bg-clr",
  "background-image":       mohidPrefix + "bg-img",
  "font-size":              mohidPrefix + "font-size",
  "font-weight":            mohidPrefix + "font-weight",
  "width":                  mohidPrefix + "width",
  "height":                 mohidPrefix + "height",
  "max-width":              mohidPrefix + "max-width",
  "max-height":             mohidPrefix + "max-height",
  "min-width":              mohidPrefix + "min-width",
  "min-height":             mohidPrefix + "min-height",
  "top":                    mohidPrefix + "top",
  "bottom":                 mohidPrefix + "bottom",
  "right":                  mohidPrefix + "right",
  "left":                   mohidPrefix + "left",
  "margin":                 mohidPrefix + "m",
  "margin-top":             mohidPrefix + "mt",
  "margin-bottom":          mohidPrefix + "mb",
  "margin-right":           mohidPrefix + "mr",
  "margin-left":            mohidPrefix + "ml",
  "padding":                mohidPrefix + "p",
  "padding-top":            mohidPrefix + "pt",
  "padding-bottom":         mohidPrefix + "pb",
  "padding-right":          mohidPrefix + "pr",
  "padding-left":           mohidPrefix + "pl",
  "gap":                    mohidPrefix + "gap",
};

// Loop to check every element (Single Element)
for (let jitIndex = 0; jitIndex <= jitEveryElement.length; jitIndex++) {
    jitTriggeredElement = jitEveryElement[jitIndex];
    if(jitTriggeredElement != null && jitTriggeredElement != undefined){
        jitTriggeredElementClasses = jitTriggeredElement.classList;
        jitTriggeredElementClasses.forEach((jitTriggered) => {
            // Checking if any JIT class exists
            Object.entries(jitAllowedProps).forEach((jitAllowedClass) => {
                const [jitAllowedClassKey, jitAllowedClassValue] = jitAllowedClass,
                jitAllowedClassPattern = new RegExp("^(" + jitAllowedClassValue + ")-(\\[)([# \\w . ( )]+)(\\])", "g");
                // Checking if any element has jit class
                let jitIsAllowedClass = jitTriggered.match(jitAllowedClassPattern)
                if(jitIsAllowedClass){
                    // Getting the value of particular JIT property value
                    let jitTriggeredElementClassValue = jitTriggered.match(/(\[)[# \w . ( )]+/g);
                    jitTriggeredElementClassValue = jitTriggeredElementClassValue[0].substr( 1, jitTriggeredElementClassValue[0].length);

                    jitTriggeredElement.style.setProperty(jitAllowedClassKey, jitTriggeredElementClassValue);
                }
            });
        });
    }
}

