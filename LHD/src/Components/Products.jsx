import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaChevronDown, FaDownload, FaBrain, FaBone, FaCapsules, FaTablets, FaFemale, FaLungs, FaStethoscope, FaSearch, FaTimes, FaExpand, FaFilter, FaStar, FaAward, FaShieldAlt, FaMicroscope, FaCheck } from 'react-icons/fa';

const productCategories = {
  Neurology: {
    icon:<FaBrain/>,
    gradient: 'from-orange-100 to-orange-200',
    borderColor: 'border-orange-300',
    iconBg: 'bg-orange-500',
    description: 'Advanced neurological treatments',
    products:[
      { id: 1, title: 'Paxtin-Plus', imageUrl: 'https://i.postimg.cc/d1cC7Wpv/IMGL9766-min.webp', featured: true },
      { id: 2, title: 'Welpose-TF', imageUrl: 'https://i.postimg.cc/FRbL0yXS/IMGL9842-min.webp'},
      { id: 3, title: 'Valpolit CR-500', imageUrl: 'https://i.postimg.cc/QdP1DNqF/IMGL9854-min.webp', featured: true },
      { id: 4, title: 'Penotin-GB', imageUrl: 'https://i.postimg.cc/25ZvSpH2/IMGL9864-min.webp' },
      { id: 5, title: 'Ceribro', imageUrl: 'https://i.postimg.cc/BbMPVJ6Q/IMGL9910-min.webp' },
    ]
  },
  Orthopaedics:{
    icon:<FaBone/>,
    gradient: 'from-orange-100 to-orange-200',
    borderColor: 'border-amber-300',
    iconBg: 'bg-amber-500',
    description: 'Bone and joint care solutions',
    products: [
      { id: 9, title: 'Sylibon-D3', imageUrl: 'https://i.postimg.cc/hPNtPXHR/IMGL9736-min.webp' },
      { id: 10, title: 'Sylibon-D3', imageUrl: 'https://i.postimg.cc/ZqSYp1bf/IMGL9875-min.webp', featured: true },
      { id: 11, title: 'Sylibon-Gold', imageUrl: 'https://i.postimg.cc/fTVbNcqv/IMGL9922-min.webp' },
      { id: 13, title: 'Penomol-P Tablets', imageUrl: 'https://i.postimg.cc/VNWfRD5z/IMGL9970-min.webp' },
    ]
  },
  Gastroenterology: {
    icon:<FaCapsules/>,
    gradient: 'from-orange-100 to-orange-200',
    borderColor: 'border-orange-300',
    iconBg: 'bg-orange-600',
    description: 'Digestive health products',
    products:[
      { id: 17, title: 'Penlit-D', imageUrl: 'https://i.postimg.cc/j2JB8Svy/IMGL9791-min.webp' },
      { id: 18, title: 'Zolit-RD', imageUrl: 'https://i.postimg.cc/FR62gLb9/IMGL9906-min.webp', featured: true },
      { id: 19, title: 'Penlit-DSR', imageUrl: 'https://i.postimg.cc/WtLCxcfC/IMGL9973-min.webp' },
      { id: 20, title: 'Sathicon-140', imageUrl: 'https://i.postimg.cc/43WCyMmH/IMGL0005-min.webp' },
      { id: 21, title: 'Rentadin-300', imageUrl: 'https://i.postimg.cc/4dyD959L/IMGL0043-min.webp' },
      { id: 50, title: 'Lacotil Syrup', imageUrl: 'https://i.postimg.cc/PJz0GRsq/IMGL9943-min.webp' },
    ]
  },
  AntiBiotics:{
    icon:<FaTablets/>,
    gradient: 'from-orange-100 to-orange-200',
    borderColor: 'border-orange-300',
    iconBg: 'bg-orange-500',
    description: 'Powerful antibiotic formulations',
    products:[
      { id: 22, title: 'G-XL-250', imageUrl: 'https://i.postimg.cc/cCw0vhqq/IMGL0112-min.webp' },
      { id: 23, title: 'Sinaxim-AZ', imageUrl: 'https://i.postimg.cc/k4k7MZpF/IMGL0034-min.webp', featured: true },
      { id: 24, title: 'Sinaxim-O', imageUrl: 'https://i.postimg.cc/LXqHpRN8/IMGL0068-min.webp' },
      { id: 25, title: 'Licsef-500', imageUrl: 'https://i.postimg.cc/ZqsT20PQ/IMGL0106-min.webp' },
      { id: 26, title: 'Emoxclav-625', imageUrl: 'https://i.postimg.cc/s2gjT5WS/IMGL0110-min.webp' },
    ]
  },
  Hepatology: {
    icon:<FaCapsules/>,
    gradient: 'from-orange-100 to-orange-200',
    borderColor: 'border-amber-300',
    iconBg: 'bg-amber-600',
    description: 'Liver health and protection',
    products:[
      { id: 31, title: 'Livrofit-DS Syrup', imageUrl: 'https://i.postimg.cc/7PgFTfGy/IMGL9868-min.webp' },
      { id: 32, title: 'Lacotil Syrup', imageUrl: 'https://i.postimg.cc/PJz0GRsq/IMGL9943-min.webp' },
      { id: 33, title: 'Zodoliv-300', imageUrl: 'https://i.postimg.cc/zv14c1QM/IMGL9985-min.webp', featured: true },
      { id: 34, title: 'Livofit-DS', imageUrl: 'https://i.postimg.cc/DyntQnL4/IMGL0016-min.webp' },
    ]
  },
  Gynaecology: {
    icon:<FaFemale/>,
    gradient: 'from-orange-100 to-orange-200',
    borderColor: 'border-red-300',
    iconBg: 'bg-red-500',
    description: 'Women\'s health solutions',
    products:[
      { id: 42, title: 'Cliptocin Capsules', imageUrl: 'https://i.postimg.cc/nzL7jfps/IMGL9800-min.webp' },
      { id: 43, title: 'Clotec-MF', imageUrl: 'https://i.postimg.cc/rpjxwwXX/IMGL9946-min.webp', featured: true },
      { id: 44, title: 'Pasmotil', imageUrl: 'https://i.postimg.cc/C5Bq7CZS/IMGL9949-min.webp' },
      { id: 45, title: 'Fiufol-XT Suspension', imageUrl: 'https://i.postimg.cc/85nvLXzZ/IMGL9957-min.webp' },
    ]
  },
  Respiratory:{
    icon:<FaLungs/>,
    gradient: 'from-orange-100 to-orange-200',
    borderColor: 'border-orange-300',
    iconBg: 'bg-orange-500',
    description: 'Respiratory care excellence',
    products:[
      { id: 46, title: 'Amofex-Plus', imageUrl: 'https://i.postimg.cc/65VBY47v/IMGL0088-min.webp' },
      { id: 47, title: 'Litra-M', imageUrl: 'https://i.postimg.cc/J4C1N5h8/IMGL9896-min.webp', featured: true },
      { id: 48, title: 'Euspore-200', imageUrl: 'https://i.postimg.cc/139sTR6Y/IMGL9914-min.webp' },
      { id: 49, title: 'Mucobest', imageUrl: 'https://i.postimg.cc/vZ3bdRt8/IMGL9833-min.webp' },
    ]
  },
  Injections:{
    icon:<FaStethoscope/>,
    gradient: 'from-orange-100 to-orange-200',
    borderColor: 'border-amber-300',
    iconBg: 'bg-amber-600',
    description: 'Injectable therapeutics',
    products:[
      { id: 35, title: 'Sonpred-40', imageUrl: 'https://i.postimg.cc/dQLXCX82/IMGL0025.webp', featured: true },
      { id: 36, title: 'Zedpenem-SB', imageUrl: 'https://i.postimg.cc/MHQf0dG6/IMGL0060.webp' },
      { id: 37, title: 'Zactaz-4.5', imageUrl: 'https://i.postimg.cc/44q0Q55r/IMGL0072.webp' },
      { id: 38, title: 'Sonpred-125', imageUrl: 'https://i.postimg.cc/Z0zBwp9r/IMGL0101.webp' },
      { id: 39, title: 'Cefakon-S', imageUrl: 'https://i.postimg.cc/y8XrBzHH/IMGL9757.webp' },
      { id: 40, title: 'L-ORTIL', imageUrl: 'https://i.postimg.cc/65ZmjvbT/IMGL9819.webp' },
      { id: 41, title: 'Zedpenem-1', imageUrl: 'https://i.postimg.cc/DwKYtwR6/IMGL9892.webp' },
    ]
  },
};

const productListImages = [
  'https://i.postimg.cc/pTNSCzvz/LHD-New-new-page-0001.webp',
  'https://i.postimg.cc/4dzSSy4M/LHD-New-new-page-0002.webp',
  'https://i.postimg.cc/yxsb4KkN/LHD-New-new-page-0003.webp',
  'https://i.postimg.cc/L5D0mW13/LHD-New-new-page-0004.webp',
];

const Products = () => {
  const productListRef = useRef(null);
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(productCategories)[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid');

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productListImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const downloadProductList = () => {
    const link = document.createElement('a');
    link.href = '/LHD-Products.pdf';
    link.download = 'Product_List.pdf';
    link.click();
  };

  const filteredProducts = productCategories[selectedCategory].products.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') return a.title.localeCompare(b.title);
    if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    return 0;
  });

  const totalProducts = Object.values(productCategories).reduce((acc, cat) => acc + cat.products.length, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Hero Section */}
      <div 
        ref={heroRef}
        className="relative bg-white border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-6"
              >
                <FaAward className="text-orange-500" />
                Excellence Since 2008
              </motion.div>

              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-normal text-gray-900 mb-6 leading-tight">
                Quality Pharmaceutical
                <span className="block text-orange-300 mt-2">Products</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Delivering excellence in healthcare with 150+ premium pharmaceutical products across {Object.keys(productCategories).length}+ therapeutic categories.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => {
                    const productsSection = document.getElementById('products-section');
                    productsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2 mx-24 sm:px-8 sm:mx-0 bg-orange-100 border border-orange-300 hover:bg-orange-300 text-black font-semibold rounded-lg transition-colors shadow-sm"
                >
                  View Products
                </button>
                
                <button
                  onClick={downloadProductList}
                  className="px-6 py-2 mx-16 sm:px-8 sm:mx-0 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <FaDownload />
                  Download Catalog
                </button>
              </div>
            </motion.div>

            {/* Right Column - Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-6 mx-2"
            >
              {[
                { icon: <FaMicroscope />, num: 150 + '+', label: 'Products', color: 'orange' },
                { icon: <FaAward />, num: Object.keys(productCategories).length + '+', label: 'Categories', color: 'orange' },
                { icon: <FaShieldAlt />, num: '100%', label: 'Quality Assured', color: 'orange' },
                { icon: <FaStar />, num: '1000'+'+', label: 'Active Clients', color: 'orange' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-200"
                >
                  <div className="w-12 h-12 bg-orange-300 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.num}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search & Filter Section */}
      <div id="products-section" className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-32 py-3 rounded-lg border border-gray-300 focus:border-orange-200 focus:ring-2 focus:ring-orange-200 focus:outline-none text-sm bg-white transition-all"
              />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-orange-300 hover:bg-orange-400 text-white text-sm font-medium rounded-md transition-colors flex items-center gap-2"
              >
                <FaFilter className="text-xs" />
                {isMobile ? '' : 'Filter'}
              </button>
            </div>

            {/* Filters Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 bg-white rounded-lg border border-gray-200 overflow-hidden"
                >
                  <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wider">Sort By</label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-3 py-2 rounded-md border border-gray-200 focus:border-orange-300 focus:outline-none text-sm"
                      >
                        <option value="default">Default</option>
                        <option value="name">Name (A-Z)</option>
                        <option value="featured">Featured First</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wider">View Mode</label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setViewMode('grid')}
                          className={`flex-1 py-2 rounded-md font-medium text-sm transition-colors ${
                            viewMode === 'grid' 
                              ? 'bg-orange-300 text-white' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          Grid
                        </button>
                        <button
                          onClick={() => setViewMode('list')}
                          className={`flex-1 py-2 rounded-md font-medium text-sm transition-colors ${
                            viewMode === 'list' 
                              ? 'bg-orange-300 text-white' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          List
                        </button>
                      </div>
                    </div>
                    <div className="flex items-end">
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setSortBy('default');
                        }}
                        className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md font-medium text-sm transition-colors"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Category Tabs */}
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="flex gap-2 px-4 sm:px-0 pb-2 min-w-max sm:min-w-0">
              {Object.entries(productCategories).map(([category, data]) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? `bg-gradient-to-br ${data.gradient} ${data.borderColor} border text-gray-900`
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded flex items-center justify-center text-white text-xs ${
                    selectedCategory === category ? data.iconBg : 'bg-gray-400'
                  }`}>
                    {data.icon}
                  </div>
                  {category}
                  <span className="text-xs opacity-70">({data.products.length})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category Header */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{selectedCategory}</h2>
            <p className="text-gray-600">{productCategories[selectedCategory].description}</p>
            <div className="mt-2 text-sm text-gray-500">
              {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''} found
            </div>
          </motion.div>

          {/* Products Display */}
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {sortedProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setSelectedProduct(product)}
                    className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-orange-300 transition-all cursor-pointer"
                  >
                    {product.featured && (
                      <div className="absolute top-3 right-3 z-10 px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded flex items-center gap-1">
                        <FaStar className="text-[10px]" /> Featured
                      </div>
                    )}
                    
                    <div className="relative h-56 bg-gradient-to-br from-gray-50 to-white p-6">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        {productCategories[selectedCategory].icon}
                        <span>{selectedCategory}</span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-3"
              >
                {sortedProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setSelectedProduct(product)}
                    className="group bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:shadow-md hover:border-orange-300 transition-all cursor-pointer"
                  >
                    {product.featured && (
                      <div className="px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded flex items-center gap-1 flex-shrink-0">
                        <FaStar className="text-[10px]" /> Featured
                      </div>
                    )}
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-white rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors truncate">
                        {product.title}
                      </h3>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        {productCategories[selectedCategory].icon}
                        {selectedCategory}
                      </p>
                    </div>
                    <FaExpand className="text-gray-400 group-hover:text-orange-500 transition-colors flex-shrink-0" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {sortedProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-2xl text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
              >
                <FaTimes />
              </button>

              <div className="p-8">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-12 mb-6">
                  <img
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.title}
                    className="w-full h-auto object-contain max-h-96"
                  />
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-300 text-orange-700 rounded-full text-sm font-medium mb-4">
                    {productCategories[selectedCategory].icon}
                    {selectedCategory}
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedProduct.title}
                  </h2>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Catalog Section */}
      <div ref={productListRef} className="bg-gradient-to-br from-gray-50 to-orange-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Product Catalog
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our comprehensive pharmaceutical portfolio
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gray-50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={productListImages[currentSlide]}
                  alt={`Catalog page ${currentSlide + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2">
                {productListImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-all ${
                      currentSlide === idx 
                        ? 'w-8 h-2 bg-orange-300' 
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    } rounded-full`}
                  />
                ))}
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + productListImages.length) % productListImages.length)}
                  className="w-9 h-9 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % productListImages.length)}
                  className="w-9 h-9 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={downloadProductList}
              className="inline-flex items-center gap-2 px-8 py-2 sm:px- bg-orange-100 hover:bg-orange-300 border border-orange-300 text-black font-semibold rounded-lg transition-colors shadow-sm"
            >
              <FaDownload />
              Download Complete Catalog
            </button>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-6">
              <FaAward />
              Partner With Us
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Connect with our team to learn more about our pharmaceutical products and partnership opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://wa.me/919068389292" className="px-8 py-2 mx-12 sm:mx-0 sm:px-4 bg-orange-100 border border-orange-300 hover:bg-orange-300 text-black font-semibold rounded-lg transition-colors">
                Schedule Consultation
              </a>
              <a href="tel:+919068389292" className="px-8 py-2 mx-12 sm:mx-0 sm:px-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-200 transition-colors">
                Contact Sales
              </a>
            </div>

            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;