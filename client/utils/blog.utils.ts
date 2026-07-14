import { type SanityDocument } from 'next-sanity';
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from '@sanity/image-url';

export const blogPostImageUrl = (
  post: SanityDocument,
  projectId: string | undefined,
  dataset: string | undefined
) => {
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? createImageUrlBuilder({ projectId, dataset }).image(source)
      : null;
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return postImageUrl;
};
