const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll().then((tagsData) => {
    res.json(tagsData);
  })
});
router.get('/:id', (req, res) => {
  Tag.findOne(
    {
      where: {
        id: req.params.id
      }
    }
  ).then((tagData) => {
    res.json(tagData);
  });

  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
});
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((product) => {
      res.json(product)
    });
});

router.put('/:id', (req, res) => {
  Tag.update(
   req.body,
    {
      where: {
        id: req.params.id,
      },
    }
  )
    // update a tag's name by its `id` value
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    // delete on tag by its `id` value
    .then((deletedTag) => {
      res.json(deletedTag);
    })
  
});

module.exports = router;