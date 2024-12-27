import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../components/cart/CartItem';
import { Button } from '../components/ui/Button';
import { useCart } from '../hooks/useCart';

export function Cart() {
  const { state, updateQuantity, removeFromCart } = useCart();
  const total = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-playfair font-bold mb-8">Корзина</h1>

      {state.items.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Ваша корзина пуста</p>
          <Link to="/catalog">
            <Button variant="primary" size="lg">
              Перейти в каталог
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {state.items.map((item) => (
              <CartItem
                key={item.product.id}
                item={item}
                onUpdateQuantity={(id, quantity) => updateQuantity(id, quantity)}
                onRemove={removeFromCart}
              />
            ))}
          </div>

          <div className="mt-8 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Итого:</span>
              <span className="text-2xl font-bold">{total} ₽</span>
            </div>
            <Button variant="primary" size="lg" className="w-full">
              Оформить заказ
            </Button>
          </div>
        </>
      )}
    </div>
  );
}