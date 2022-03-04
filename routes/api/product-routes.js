const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  Product.findAll().then((categoryData) => {
    res.json(categoryData);
  });
  // be sure to include its associated Category and Tag data
});

// get one product
router.get('/:id', (req, res) => {
  Product.findOne(
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

// create new product
router.post('/', (req, res) => {
  Product.create(req.body)
    .then((product) => {
      res.json(product)
    })
   
  })

  // update product
  router.put('/:id', (req, res) => {
    Product.update(req.body,{
      where: {
        id: req.params.id
      }
    }).then(updated => res.json(updated))
  });

  router.delete('/:id', (req, res) => {
    // delete one product by its `id` value
    Product.destroy({
      where: {
        id: req.params.id
      }
    }).then(productData => {
      res.json(productData)
    });
  });
module.exports = router;
