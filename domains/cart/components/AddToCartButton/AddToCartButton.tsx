import { useRouter } from '../../../../platform';
import { Button } from '../../../../ui';
import { useAddItem } from '../../hooks';

interface AddToCartButtonProps {
  children: React.ReactNode;
  itemId: string;
}

export default function AddToCartButton({
  children,
  itemId,
}: AddToCartButtonProps) {
  const { addItem } = useAddItem();
  const router = useRouter();

  const handleClick = async () => {
    await addItem({ itemId });
    router.push('/cart');
  };

  return (
    <Button
      type="button"
      color="primary"
      size="large"
      variant="solid"
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
