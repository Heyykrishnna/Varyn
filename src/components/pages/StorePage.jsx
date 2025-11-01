import React, { useMemo, useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2, CreditCard, Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

function ProductCard({ item, onAdd, onOpen }) {
  let description = '';
  switch (item.category) {
    case 'Apparel':
      description = 'Crafted from premium cotton for unmatched comfort and everyday wear.';
      break;
    case 'Accessories':
      description = 'Add a touch of flair to your look with stylish and durable accessories.';
      break;
    case 'Gear':
      description = 'Engineered for precision and performance to enhance your gaming setup.';
      break;
    case 'Furniture':
      description = 'Ergonomic design built for long hours of gaming comfort and posture support.';
      break;
    case 'Collectibles':
      description = 'Exclusive limited-edition collectible perfect for enthusiasts and fans alike.';
      break;
    case 'Electronics':
      description = 'Experience next-level sound and speed with cutting-edge gaming technology.';
      break;
    default:
      description = 'Crafted from premium cotton, this oversized tee offers unmatched comfort and a timeless streetwear look.';
  }
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-white text-black flex flex-col transform transition-transform hover:scale-105 hover:shadow-lg">
      <button onClick={() => onOpen(item)} className="relative w-full aspect-[4/5] overflow-hidden group">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </button>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-semibold text-base leading-tight">{item.title}</div>
            <div className="text-xs italic text-black/70">{item.category}</div>
          </div>
          {item.badge && (
            <span className="text-[10px] uppercase px-2 py-1 rounded bg-black text-white">{item.badge}</span>
          )}
        </div>
        <div className="text-sm text-black/70 mt-2 line-clamp-2">
          {description}
        </div>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="font-bold text-lg">₹{item.price.toFixed(2)}</div>
          <button
            onClick={() => onAdd(item)}
            className="rounded-md bg-black text-white px-4 py-2 text-xs font-semibold hover:opacity-90 hover:bg-gray-800 transform transition duration-300 hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function CartDrawer({ open, onClose, items, onInc, onDec, onRemove, onCheckout }) {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/70 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute right-0 top-0 h-full w-full max-w-sm bg-black/70 backdrop-blur-md border-l border-white/10 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          <div className="font-semibold inline-flex items-center gap-2"><ShoppingCart className="h-4 w-4"/> Cart</div>
          <button onClick={onClose} className="h-9 w-9 grid place-items-center rounded-md bg-white/10 hover:bg-white/20"><X className="h-5 w-5"/></button>
        </div>
        <div className="p-4 grid gap-3 overflow-y-auto h-[calc(100%-160px)]">
          {items.length === 0 && <div className="text-sm text-white/60">Your cart is empty.</div>}
          {items.map((it) => (
            <div key={it.id} className="rounded-md border border-white/10 p-3 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded overflow-hidden shrink-0 bg-white/10">
                  <img src={it.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold text-sm leading-tight">{it.title}</div>
                      <div className="text-xs text-white/60">₹{it.price.toFixed(2)}</div>
                    </div>
                    <button onClick={() => onRemove(it.id)} className="text-white/60 hover:text-white"><Trash2 className="h-4 w-4"/></button>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2">
                      <button onClick={() => onDec(it.id)} className="h-7 w-7 grid place-items-center rounded-md border border-white/15"> <Minus className="h-4 w-4"/> </button>
                      <span className="text-sm">{it.qty}</span>
                      <button onClick={() => onInc(it.id)} className="h-7 w-7 grid place-items-center rounded-md border border-white/15"> <Plus className="h-4 w-4"/> </button>
                    </div>
                    <div className="font-semibold text-sm">₹{(it.price * it.qty).toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/60">Subtotal</span>
            <span className="font-semibold">₹{total.toFixed(2)}</span>
          </div>
          <button onClick={onCheckout} disabled={!items.length} className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-semibold hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed">
            <CreditCard className="h-4 w-4"/> Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StorePage() {
  const products = useMemo(() => ([
    { id: 'tee-solid', title: 'Solid Logo Tee', category: 'Apparel', price: 2499.99, image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1748277502_4153803.jpg?w=480&dpr=2' },
    { id: 'hoodie-black', title: 'Black Hoodie', category: 'Apparel', price: 4999.99, image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1736662837_8365054.jpg?w=480&dpr=2' },
    { id: 'cap-classic', title: 'Classic Cap', category: 'Accessories', price: 1999.99, image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1761314755_5758314.jpg?w=480&dpr=2' },
    { id: 'mousepad-xl', title: 'XL Mousepad', category: 'Gear', price: 2999.99, image: 'https://d1q3zw97enxzq2.cloudfront.net/images/corsair_mm700_mouse_pad.width-1000.format-webp.webp' },
    { id: 'mug-logo', title: 'Logo Mug', category: 'Accessories', price: 1499.99, image: 'https://www.arakucoffee.in/cdn/shop/files/Arakuday23633-Edit.jpg?v=1686902422' },
    { id: 'sticker-pack', title: 'Sticker Pack', category: 'Accessories', price: 999.99, image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/sticker/x/i/o/medium-91-vibrant-gaming-sticker-set-for-console-pc-gamers-original-imah27qzfhfsu8gz.jpeg?q=90' },
    { id: 'keyboard-pro', title: 'Pro Mechanical Keyboard', category: 'Gear', price: 8999.99, image: 'https://m.media-amazon.com/images/I/71Mn3zh2laL._AC_SL1500_.jpg' },
    { id: 'gaming-chair', title: 'Ergo Gaming Chair', category: 'Furniture', price: 14999.99, image: 'https://cellbell.in/cdn/shop/files/B0CRVLXGS9.MAIN.png?v=1741583867' },
    { id: 'poster-collection', title: 'Poster Collection', category: 'Collectibles', price: 2499.99, image: 'https://m.media-amazon.com/images/I/815Z4wiRj7L._AC_UF894,1000_QL80_.jpg' },
    { id: 'wireless-earbuds', title: 'Wireless Gaming Earbuds', category: 'Electronics', price: 6999.99, image: 'https://m.media-amazon.com/images/I/61nNrtXo3GL.jpg' },
    { id: 'hoodie-red', title: 'Red Logo Hoodie', category: 'Apparel', price: 4999.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDHn-qaug10o1Pubxi19woVnhxwAdXnDvNfA&s' },
    { id: 'collectible-figure', title: 'Limited Edition Figure', category: 'Collectibles', price: 5999.99, image: 'https://m.media-amazon.com/images/I/510uWHxI-VL._AC_UF1000,1000_QL80_.jpg' },
  ]), []);

  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');
  const [active, setActive] = useState(null);

  const addToCart = (item) => {
    setCart((prev) => {
      const ex = prev.find((p) => p.id === item.id);
      if (ex) return prev.map((p) => p.id === item.id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...item, qty: 1 }];
    });
    setOpen(true);
  };

  const inc = (id) => setCart((prev) => prev.map((p) => p.id === id ? { ...p, qty: p.qty + 1 } : p));
  const dec = (id) => setCart((prev) => prev.map((p) => p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p));
  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const checkout = () => {
    alert('Checkout complete. Thank you!');
    setCart([]);
    setOpen(false);
  };

  const categories = useMemo(() => ['All', ...Array.from(new Set(products.map(p => p.category)))], [products]);

  const list = useMemo(() => {
    let filtered = products.filter(p =>
      (category === 'All' || p.category === category) &&
      (p.title.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
    );
    if (sort === 'price-asc') filtered = filtered.sort((a,b)=> a.price - b.price);
    if (sort === 'price-desc') filtered = filtered.sort((a,b)=> b.price - a.price);
    if (sort === 'title') filtered = filtered.sort((a,b)=> a.title.localeCompare(b.title));
    return filtered;
  }, [products, query, category, sort]);

  const ProductModal = ({ item, onClose }) => {
    if (!item) return null;
    return (
      <div className="fixed inset-0 z-50">
        <div className="absolute inset-0 bg-black/70" onClick={onClose} />
        <div className="absolute inset-0 p-4 sm:p-6 flex items-center justify-center">
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden bg-white text-black shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              <div className="p-6 md:p-8 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
                    <p className="text-sm text-black/60">{item.category}</p>
                  </div>
                  <button onClick={onClose} className="h-9 w-9 grid place-items-center rounded-md bg-black text-white"><X className="h-5 w-5"/></button>
                </div>
                <p className="mt-4 text-sm text-black/80">High-quality, durable, and designed with true fans in mind, this product is crafted for comfort, style, and long-lasting use. Perfect for everyday wear, whether at home or on the go, it also makes a thoughtful and exciting gift for friends and family. With attention to detail that ensures authenticity and a versatile design suitable for casual outings, events, or lounging, it’s built to withstand daily use without losing its charm. Show off your passion and fandom wherever you go—this is a must-have addition that combines functionality, style, and fandom in one exceptional product.</p>
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <div className="text-2xl font-bold">₹{item.price.toFixed(2)}</div>
                  <div className="inline-flex gap-3">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-12 sm:py-16 min-h-screen">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">Store</h1>
              <p className="mt-3 text-white/80 max-w-md">Buy official merchandise and gear. Solid design, premium feel.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <select value={sort} onChange={(e)=>setSort(e.target.value)} className="appearance-none pr-8 pl-3 py-2 rounded-md border border-white/15 bg-white/5 text-white text-sm">
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="title">Title</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60"/>
              </div>
              <button onClick={()=>setOpen(true)} className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition">
                <ShoppingCart className="h-4 w-4"/> Cart ({cart.reduce((s,i)=>s+i.qty,0)})
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative flex-1 min-w-[220px] max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50"/>
              <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search products" className="w-full pl-10 pr-3 py-2 rounded-md border border-white/15 bg-white/5 text-white placeholder-white/50 text-sm outline-none focus:ring-2 focus:ring-white/20"/>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            {categories.map((c) => (
              <button key={c} onClick={() => setCategory(c)} className={`px-4 py-2 rounded-full text-sm border ${category===c ? 'bg-white text-black border-white' : 'bg-white/5 text-white border-white/15 hover:bg-white/10'}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <ProductCard key={p.id} item={p} onAdd={addToCart} onOpen={setActive} />
            ))}
          </div>
        </div>
      </div>

      <CartDrawer open={open} onClose={()=>setOpen(false)} items={cart} onInc={inc} onDec={dec} onRemove={removeItem} onCheckout={checkout} />
      <ProductModal item={active} onClose={()=>setActive(null)} />
    </section>
  );
}
