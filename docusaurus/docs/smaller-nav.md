title: SmallNav
---

import { SmallNav } from 'jasper-ui'

SmallNav is the smallest form of navigation inside a single page. Note that this component does not deal with navigation across several pages with different route paths. 

### Usage

As it is meant to serve as the smallest form of navigation, the SmallNav sections informations under several navItems and displays them one at a time. 

Each navItem object shall have a `title` that will be displayed as navigation, and the `component` that will be rendered when the navItem is clicked. These navItem objects is then wrapped into an array and passed as the `navItems` props. 

### Code
```jsx
const navItems = [
  {
    title: "Bio",
    component: <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse felis tortor, egestas sit amet lorem eget, blandit egestas elit. Sed ac lacus ut felis rhoncus.</div>
  },
  {
    title: "Contact",
    component: <div>Suspendisse pellentesque egestas massa non efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras in ullamcorper urna, in auctor nulla.</div>
  },
  {
    title: "More Information",
    component: <div>Proin ac ligula semper, tristique nisi quis, egestas tortor. Vestibulum diam augue, lacinia non vehicula eu, efficitur non risus. Maecenas non turpis id mauris pellentesque.</div>
  }
]

<SmallNav navItems={navItems}/>
```

## Props and Class Names

| Prop name   | Type   | Mandatory/Optional | Description                       |
| ----------- | ------ | ------------------ | --------------------------------- |
| navItems    | array  | Mandatory          | titles and components to display  |
| style       | object | Optional           | custom styling for each navItem   |
| activeStyle | object | Optional           | custom styling for active navItem |