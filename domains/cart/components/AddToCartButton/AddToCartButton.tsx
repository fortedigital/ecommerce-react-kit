import { useRouter } from '../../../../platform';
import { Button } from '../../../../ui';
import { useAddItem } from '../../hooks';

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
  const { addItem } = useAddItem();
  const router = useRouter();

  const handleClick = async () => {
    await addItem({ itemId });
    router.push(router.routes.cart);
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
