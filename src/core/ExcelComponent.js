import { DomListener } from '@core/DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || '';
        this.emitter = options.emitter;
        this.unsubscribers = []

        this.prepare()
    }

    prepare() {

    }
    // возвращает шаблон компонента
    toHTML() {
        return ''
    }

    //уведомление слушателей о подписке
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // подписываемся на событие event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    init() {
        this.initDomListeners()
    }

    destroy() {
        this.removeDomListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}
