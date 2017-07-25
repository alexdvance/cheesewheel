Cheesewheel
==========

![wheels screenshot](https://alexdvance.github.io/cheesewheel/img/screenshot.png)

Add your tasks to a wheel and spin to pick a random one to work on. Alter the size of each slice through config options. A random number generator will determine which task is selected.

Dependencies:
-------------------------
* http://d3js.org/d3.v3.zip
* https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js
* https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.4/angular-material.css


How to use:
------------------------

**Set up a Wheel**

* PieSpinner is the service that creates the spinner wheel, found in the piespinner.js file 
* Inject the `PieSpinner` dependency into the controller/directive/component where you're going to use it
* Create a config object with slices array and container element options
* Call `PieSpinner.init(config)`

```
// In controller
var config = {
  element: '#cheesewheel-container',
  slices: [
    { label: 'Record Rap Album', weight: 3 },
    { label: 'React Tutorial', weight: 2 },
    { label: 'Gym', weight: 1 },
    { label: 'Bake Pie', weight: 1 },
  ]
};
    
PieSpinner.init(config);

// In markup
<div id="cheesewheel-container"></div>
```

**Spin the Wheel**

call the .spin method.

    // In controller
    scope.spin = PieSpinner.spin;
    
    // In markup
    ng-click="spin();"


**Update the wheel**

change or make a new slices array, add it to the config object, and re-init the spinner

    pieChartConfig.slices = [
                        { label: 'Coding', weight: 2 },
                        { label: 'Cooking', weight: 1 },
                        { label: 'Exercise', weight: 1 },
    ];
    PieSpinner.init(pieChartConfig);
    
    

# API Reference

## methods

### `init`

This can be called to create a new PieSpinner instance.

```javascript
PieSpinner.init(config)
```

##### Config Options

- `element`: `{String}`
  - A selector for the DOM element which will be the container of the pie spinner.
  - Example: '#pieSpinnerContainer'
- `slices`: `{Array}`
  - An array of slice objects with label {String} and weight {Integer} fields. Label is the string that will appear next to each slice, weight is the relative size the slice will take up within the pie.
    - Example: { label: 'Career', weight: 2 }
- `type`: `{String}` _optional_
  - Options are `twister` (spinner spins) or `wheelOfFortune` (wheel spins)
  - Default: `twister`
- `width`: `{Integer}` _optional_
  - Default: `680`
- `height`: `{Integer}` _optional_
  - Default: `450`
- `outerR`: `{Integer}` _optional_
  - Spinner length
  - Default: `280`
- `minRotation`: `{Integer}` _optional_
  - Default: `1080`
  - Default: `1080`
- `maxRotation`: `{Integer}` _optional_
  - Default: `1080`
  - Default: `7200`
- `colors`: `{Array}` _optional_
  - Color theme for slices
  - Default: `["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]`
  

### `spin`

This method spins the PieSpinner and returns an object with the duration of spin and winning slice info.

```javascript
PieSpinner.spin()
```


##### Returns `Spin Result {Object}`

- `duration`: `{Float}`
  - Duration of spin in seconds
- `selection`: `{Object}`
  - Selected slice details
  - `key`: `{Object}`
    - `label`: {String},
    - `value`: {Integer}
  - `start`: `{Float}`
    - Start of slice arc
  - `end`: `{Float}`
    - End of slice arc
  

```javascript
// Example return
{
  "duration": 6936.111111111111,
  "selection": {
    "key": {
      "label": "Social",
      "value": 1
    },
    "start": 4.886921905584122,
    "end":5.585053606381854
  }
};
```



-------------------------------
Here's the working example:

http://cheesewheel.co
