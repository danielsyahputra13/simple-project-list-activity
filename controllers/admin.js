exports.getAddActivity = (req, res, next) => {
    res.render('admin/add-activity', {
        pageTitle: 'Add Activity'
    });
}