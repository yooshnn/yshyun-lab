import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import Image from 'next/image';
import { Box, Button, Email, Link, Phone, Typography } from '@/components';
import { professorInfo } from '../config';
import styles from './profile.module.scss';

export const Profile = () => {
  const { name, title, position, department, email, phone, office, image } =
    professorInfo;

  return (
    <Box className={styles.profile}>
      <Box direction="x" className={styles.body}>
        <div className={styles.photograph}>
          <Image fill src={image} alt="Photograph of professor Hyun." />
        </div>
        <div className={styles.information}>
          <h2 className={styles.name}>
            <span>{name}</span>
            <span>{title}</span>
          </h2>
          <div className={styles.location}>
            <span>{position}</span>
            <ul>
              {department.map((item) => (
                <Typography as="li" key={item}>
                  {item}
                </Typography>
              ))}
            </ul>
          </div>
          <div className={styles.contact}>
            <ContactItem icon={MailIcon} content={<Email {...email} />} />
            <ContactItem icon={PhoneIcon} content={<Phone data={phone} />} />
            <ContactItem icon={MapPinIcon} content={office} />
          </div>
        </div>
      </Box>
      <Button asChild>
        <Link href="https://math.inha.ac.kr/math/index.do" unstyled external>
          Curriculum Vitae
        </Link>
      </Button>
    </Box>
  );
};

interface ContactItemProps {
  icon: React.ElementType;
  content: React.ReactNode;
}

const ContactItem = ({ icon: Icon, content }: ContactItemProps) => (
  <div className={styles.contactItem}>
    <Icon />
    <span>{content}</span>
  </div>
);
