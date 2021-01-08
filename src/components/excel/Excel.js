import { $ } from '@core/dom';

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
    }

    getRoot() {
        const $root = $.create('div', 'excel')
       
        this.components = this.components.map( Component => {
            // const $el = document.createElement('div')
            // $el.classList.add(Component.className)
            const $el = $.create('div', Component.className)
            const component = new Component($el)
            // // debug
            // if (component.name) {
            //     window['c'+ component.name] = component
            // }
            $el.html(component.toHTML())
            $root.append($el)
            return component
        })
        return $root
    }

    render() {
        // 1. this.$el.insertAdjacentHTML('afterBegin', `<h1>Test</h1>`)
        // 2. const node = document.createElement('h1')
        // node.textContent = 'TESST'
        // this.$el.append(node)
        this.$el.append(this.getRoot());
        
        this.components.forEach(component => {
            component.init()
        });
    }
}
