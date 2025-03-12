import { PageTitle, Typography, Wrapper } from '@/components';
import { Research } from '@/components/pages/research/research';
import styles from './page.module.scss';

export default async function Page() {
  return (
    <>
      <PageTitle title="Research" subtitle="RESEARCH" />
      <Wrapper className={styles.wrapper}>
        <Research
          title="Topological Methods in Machine Learning"
          image="/assets/research-1-banner.jpeg"
        >
          <Typography as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            accumsan quam eros, at tincidunt dui placerat at. Aenean lobortis
            sem in tellus euismod, ac commodo dolor dignissim. Praesent tortor
            lectus, mollis id accumsan vel, ullamcorper a nisi. Aliquam sit amet
            molestie purus. Mauris sit amet consectetur ligula, quis commodo
            nisl. Aenean ac dictum nulla. Integer sapien arcu, vulputate et
            lobortis ut, mattis at odio. Vivamus nec mi elementum, egestas dolor
            lobortis, sagittis lacus. Donec non tellus vitae velit volutpat
            finibus nec vitae ipsum. Morbi tincidunt ullamcorper ante sit amet
            porttitor. Etiam sit amet metus ante. In rutrum, est at rhoncus
            rutrum, lectus diam venenatis odio, ac fermentum quam velit ut
            velit. Aenean non felis eget purus accumsan malesuada non in lectus.
            Nullam nibh arcu, viverra ac dictum pellentesque, varius in libero.
            Nullam interdum, sem ut commodo vestibulum, turpis arcu laoreet
            nisi, sed venenatis sapien mauris eu lectus.
          </Typography>
          <Typography as="p">
            Suspendisse non ipsum vel dui commodo aliquam et vel elit. Quisque
            sodales, dui sed luctus porta, mauris ex interdum justo, non
            sagittis lacus justo id magna. Vestibulum imperdiet libero non
            consectetur mollis. Vestibulum sem dolor, mollis quis turpis non,
            sollicitudin efficitur dolor. Vestibulum tristique nunc tortor, a
            sodales tortor scelerisque sit amet. Quisque faucibus in nibh vitae
            accumsan. Fusce faucibus interdum ligula, vel rutrum leo porttitor
            et. Nunc consequat bibendum nibh. Fusce porta turpis pellentesque
            suscipit dictum. Fusce felis nisl, tincidunt eget est nec, venenatis
            tincidunt dui. Aliquam vitae ante neque.
          </Typography>
          <ul className={styles.publications}>
            <Typography as="li">
              Kim et al., Persistent Homology for Feature Extraction in Deep
              Learning, arXiv
            </Typography>
            <Typography as="li">
              Lee et al., Manifold Learning for High-Dimensional Data
              Representations, ICML 2023 Park
            </Typography>
          </ul>
        </Research>

        <Research title="Topological Methods in Machine Learning">
          <Typography as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            accumsan quam eros, at tincidunt dui placerat at. Aenean lobortis
            sem in tellus euismod, ac commodo dolor dignissim. Praesent tortor
            lectus, mollis id accumsan vel, ullamcorper a nisi. Aliquam sit amet
            molestie purus. Mauris sit amet consectetur ligula, quis commodo
            nisl. Aenean ac dictum nulla. Integer sapien arcu, vulputate et
            lobortis ut, mattis at odio. Vivamus nec mi elementum, egestas dolor
            lobortis, sagittis lacus. Donec non tellus vitae velit volutpat
            finibus nec vitae ipsum. Morbi tincidunt ullamcorper ante sit amet
            porttitor. Etiam sit amet metus ante. In rutrum, est at rhoncus
            rutrum, lectus diam venenatis odio, ac fermentum quam velit ut
            velit. Aenean non felis eget purus accumsan malesuada non in lectus.
            Nullam nibh arcu, viverra ac dictum pellentesque, varius in libero.
            Nullam interdum, sem ut commodo vestibulum, turpis arcu laoreet
            nisi, sed venenatis sapien mauris eu lectus.
          </Typography>
          <ul className={styles.publications}>
            <Typography as="li">
              Kim et al., Persistent Homology for Feature Extraction in Deep
              Learning, arXiv
            </Typography>
          </ul>
        </Research>
      </Wrapper>
    </>
  );
}
