export default ({ app }, inject) => {
    inject('snap', require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`))
}