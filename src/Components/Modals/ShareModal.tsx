import React, { useContext } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  FaTelegram,
  FaTwitter,
  FaLinkedin,
  FaRedditSquare,
  FaPinterestSquare,
  FaFacebookSquare,
} from "react-icons/fa";

import Subtitle from "../Atoms/Subtitle";
import "./ShareModal.scss";
import Modal from "../Templates/Modal";
import { ShareModalContext } from "../../Contexts/ShareModalContext";
import { IconType } from "react-icons";
import { Helmet } from "react-helmet";
import CopyMenu from "../Molecules/CopyMenu";

/**
 * Share option representation.
 *
 * @interface IShareOption
 */
interface IShareOption {
  id: number;
  name: string;
  icon: IconType;
  color: string;
  link: string;
  dataAction?: string;
}

/**
 * A modal window based on 'Modal' template
 * with a list of links for sharing in
 * some popular social networks.
 *
 * @return {*}  {JSX.Element}
 */
const ShareModal: React.FC = (): JSX.Element => {
  const { visible, setVisible } = useContext(ShareModalContext);

  const shareUrl = encodeURI(window.location.toString());
  const shareSummary = "Check this cool thing out!";

  const SHARE_OPTIONS: IShareOption[] = [
    {
      id: 1,
      name: "Facebook",
      icon: FaFacebookSquare,
      color: "#3c5a99",
      link: `http://www.facebook.com/sharer/sharer.php?u=${shareUrl}&summary=${shareSummary}`,
    },
    {
      id: 3,
      name: "WhatsApp",
      icon: IoLogoWhatsapp,
      color: "#25D366",
      link: `whatsapp://send?&url=${shareUrl}text=${shareSummary}`,
      dataAction: "share/whatsapp/share",
    },
    {
      id: 2,
      name: "Telegram",
      icon: FaTelegram,
      color: "#0088cc",
      link: `http://t.me/share/url?url=${shareUrl}&text=${shareSummary}`,
    },
    {
      id: 7,
      name: "Reddit",
      icon: FaRedditSquare,
      color: "#FF5700",
      link: `http://www.reddit.com/submit?url=${shareUrl}&title=${shareSummary}`,
    },
    {
      id: 4,
      name: "Twitter",
      icon: FaTwitter,
      color: "#00acee",
      link: `http://twitter.com/share?url=${shareUrl}&text=${shareSummary}&hashtags=frontend,portfolio,webapp,react`,
    },
    {
      id: 8,
      name: "Pinterest",
      icon: FaPinterestSquare,
      color: "#E60023",
      link: `http://pinterest.com/pin/create/link/?url=${shareUrl}`,
    },
    {
      id: 6,
      name: "LinkedIn",
      icon: FaLinkedin,
      color: "#0e76a8",
      link: `http://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    },
  ];

  return (
    <>
      <Helmet>
        <meta property="og:description" content={shareSummary} />
        <meta property="og:url" content={shareUrl} />
      </Helmet>
      <Modal visible={visible} setVisible={setVisible}>
        <Subtitle className="share-modal__title">Share</Subtitle>
        <div className="share-modal__copy-menu">
          <CopyMenu data={shareUrl} />
        </div>
        <div className="share-modal__share-options">
          {SHARE_OPTIONS.map((shareOption) => (
            <a
              key={shareOption.id}
              className="share-modal__link"
              href={shareOption.link}
              target="_blank"
              title={shareOption.name}
              style={{ backgroundColor: shareOption.color }}
              data-action={shareOption.dataAction}
            >
              <shareOption.icon className="share-modal__icon" />
            </a>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default ShareModal;
