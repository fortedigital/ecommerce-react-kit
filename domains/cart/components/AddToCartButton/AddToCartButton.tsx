import { useRouter } from '../../../../platform';
import { ProductData } from '../../../../types/models';
import { Button } from '../../../../ui';
import { useAddItem } from '../../hooks';

interface AddToCartButtonProps {
  item: ProductData;
  children: React.ReactNode;
}

export default function AddToCartButton({
  children,
  item,
}: AddToCartButtonProps) {
  const { addItem } = useAddItem();
  const router = useRouter();

  const handleClick = async () => {
    await addItem({ itemId: item.id });
    router.push(`/cart`);
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
