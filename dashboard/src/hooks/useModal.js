import bus from '../utils/bus'

const EVENT_NAME = 'modal:toggle'

export default function useModal () {
  const open = (payload = {}) => {
    bus.emit(EVENT_NAME, { status: true, ...payload })
  }

  const close = (payload = {}) => {
    bus.emit(EVENT_NAME, { status: false, ...payload })
  }

  const listen = (fn) => {
    bus.on(EVENT_NAME, fn)
  }

  const off = (fn) => {
    bus.off(EVENT_NAME, fn)
  }

  return {
    open, close, listen, off
  }
}
