var vsSettings = {
  appKey: 'APP_KEY',
  fl: ["im_url", "price", "title", "product_url", 'brand', 'category', 'discount_price'],
  limit: 15
};

var displaySettings = {
  totalNumProducts: 50,
  hasTopPagination: true,
  cardsPerRow: 3,
  filterTitle: "Filter by"
};

var filterList = [
  {
    title: 'Categories',
    type: 'category',
    schema: 'category',
    style: "check-box",
    list: [{label: "Dress"},
           {label: "Top"},
           {label: "Bottom"}]
  },
  {
    title: 'Price',
    type: 'price',
    schema: 'price',
    style : 'range-bar',
    list: {min: 1, max: 100}
  }
];

var onChange = function(value) {
  if(value.status == "OK") {
    $('.dummy-ele').css('display', 'none');
  }
}

var colorSearchOpts = {
  productDetails: { //dynamic config
    heading: 'title',
    productUrl: 'product_url',
    label: 'brand',
    price: "price",
    discountPrice: "discount_price"
  },
  filters: filterList,
  searchTitle: "Color search results",
  hasHoverCartIcon: true,
  hasStaticCartIcon: false,
  hasHoverFindSimilar: true,
  hasStaticFindSimilar: false,
  findSimilarText: "Find similar",
  onQueryComplete: onChange
};

var options = {
  vsSettings: vsSettings,
  displaySettings: displaySettings,
  colorSearchOpts: colorSearchOpts
}

$(document).ready(function() {
    ColorSearch(
        document.getElementById("vs-colorsearch"),
        document.getElementById("vs-filter"),
        document.getElementById("vs-result-box"),
        document.getElementById("vs-preview"), options);
});
