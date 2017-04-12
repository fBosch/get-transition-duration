import camelCase from 'lodash.camelcase'

function getTransitionDuration(element, withDelay) {

    const prefixes = ' webkit moz ms o khtml'.split(' '),
        result = 0

    let duration, delay, prefix

    for (let i = 0; i < prefixes.length; i++) {
        prefix = prefixes[i] + '-'
        if (prefixes[i] === '') {
            prefix = ''
        }
        duration = window.getComputedStyle(element)[camelCase(prefix + 'transition-duration')]

        if (duration) {
            duration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000
            if (withDelay) {
                delay = window.getComputedStyle(element)[camelCase(prefix + 'transition-delay')]
                if (delay) {
                    duration += (delay.indexOf('ms') > -1) ? parseFloat(delay) : parseFloat(delay) * 1000
                }
            }
            result = duration
            break
        }
    }
    return result
}

export default getTransitionDuration
