import Modal from "@/app/components/Modal";
import PhotoPage from "@/app/photo/[slug]/page";

export default async function ModalPhotoPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <Modal>
      <PhotoPage params={params} />
    </Modal>
  );
}
