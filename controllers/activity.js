exports.getActivity = (req, res, next) => {
    res.render('activity/index', {
        pageTitle: 'List of Activity'
    })
}