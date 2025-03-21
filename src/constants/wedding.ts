import { CoupleInfo, WeddingEvent } from "@/types/common";

export const COUPLE_INFO: { bride: CoupleInfo; groom: CoupleInfo } = {
  groom: {
    name: "Athma Prayag",
    parents: "Son of Mr Anil Kumar & Mrs Geetha Anil"
  },
  bride: {
    name: "Arya Rajan",
    parents: "Daughter of Mr Rajan C N & Mrs Omana Rajan"
  }
};

export const WEDDING_EVENTS: { ceremony: WeddingEvent; reception: WeddingEvent } = {
  ceremony: {
    title: "The Ceremony",
    date: "April 30th, 2024",
    time: "11:20 AM - 12:00 PM",
    venue: "Sree Narayana Gurudeva Temple",
    location: "Ponkunnam, Kottayam"
  },
  reception: {
    title: "The Reception",
    date: "May 1st, 2025",
    time: "3:00 PM onwards",
    venue: "Muthirakkalil Thikkodi"
  }
}; 