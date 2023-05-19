import { useRouter } from '../../../../platform';
import { Button } from '../../../../ui';
import { useAddToCart } from '../../hooks';

interface AddToCartButtonProps {
  children: React.ReactNode;
  itemId: string;
  className?: string;
}

export default function AddToCartButton({
  children,
  className,
  itemId,
}: AddToCartButtonProps) {
  const { addToCart } = useAddToCart();
  const router = useRouter();

  const handleClick = async () => {
    try {
      await addToCart(itemId);
      router.push(router.routes.cart);
    } catch (error) {
      // TODO: Handle an error in UI
      console.error(error);
    }
  };

  return (
    <Button
      className={className}
      type="button"
      color="primary"
      size="medium"
      variant="solid"
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
