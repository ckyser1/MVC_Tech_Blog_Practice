const { User } = require("../../models/user");

router.get('/api/users', async (req, res) => {
    try {
      const dbData = await User.findByPk(req.params.id, {
        include: [
          {
            attributes: [
              'id',
              'first_name',
              'last_name',
              'age',
              'location',
              'health_status',
            ],
          },
        ],
      });
  
      res.render('dbData');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });