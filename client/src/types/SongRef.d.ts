export interface SongRef {
  composer: string;
  title: string;
  song_ref_id: string;
}

type SongRefsData = {
  songRefs: Array<SongRef>;
};
