import { useState } from 'react';
import Card from './Card.jsx';

const productos = [
  { id: 1, nombre: "Heladera No Frost", precio: 1200000, categoria: "Electrónica", enStock: true },
  { id: 2, nombre: "Lavarropas Automático", precio: 500000, categoria: "Electrónica", enStock: true },
  { id: 3, nombre: "Microondas Digital", precio: 700000, categoria: "Electrónica", enStock: false },
  { id: 4, nombre: "Cafetera Expresso", precio: 150000, categoria: "Electrónica", enStock: true },
  { id: 5, nombre: "Licuadora Profesional", precio: 100000, categoria: "Electrónica", enStock: true },
  { id: 6, nombre: "Camisa de Hombre", precio: 25000, categoria: "Ropa", enStock: true },
  { id: 7, nombre: "Pantalón Jeans", precio: 45000, categoria: "Ropa", enStock: false },
  { id: 8, nombre: "Zapatillas Deportivas", precio: 89000, categoria: "Ropa", enStock: true }
];

function ProductList() {
  const [categoria, setCategoria] = useState('Todas');
  const [soloStock, setSoloStock] = useState(false);

  const productosFiltrados = productos.filter(producto => {

    if (categoria !== 'Todas' && producto.categoria !== categoria) {
      return false;
    }

    if (soloStock && !producto.enStock) {
      return false;
    }
    return true;
  });

  const categorias = ['Todas', ...new Set(productos.map(p => p.categoria))];

  return (
    <div className="product-list-container">
      <h2>Lista de Productos</h2>
      <div className="filtros">
        <div className="filtro-categoria">
          <label>Filtrar por categoría: </label>
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            {categorias.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="filtro-stock">
          <label>
            <input 
              type="checkbox" 
              checked={soloStock} 
              onChange={(e) => setSoloStock(e.target.checked)}
            />
            Solo en stock
          </label>
        </div>
      </div>
      <div className="productos-grid">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map(producto => (
            <Card
              key={producto.id}
              titulo={producto.nombre}
              descripcion={`Categoría: ${producto.categoria}`}
              precio={producto.precio}
            >
              {producto.enStock ? (
                <button className="btn-comprar">Comprar</button>
              ) : (
                <button className="btn-agotado" disabled>Sin stock</button>
              )}
            </Card>
          ))
        ) : (
          <p className="sin-productos">No hay productos con los filtros seleccionados</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;