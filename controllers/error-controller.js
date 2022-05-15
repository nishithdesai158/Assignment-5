exports.show404Page = (req, res) => {
    return res.status(404).render('404',
        {
            pageTitle: 'Page Not Found',
            path: '/404',
            stud: null
        }
    );
}