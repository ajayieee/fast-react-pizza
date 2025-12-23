import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <div className='flex justify-center items-center mt-14'>

        <p className="font-semibole mt-7">
          Your cart is still empty. Start adding some pizzas :)
        </p>
        
      </div>
    </div>
  );
}

export default EmptyCart;
