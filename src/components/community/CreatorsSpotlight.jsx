import React from 'react';

function CreatorCard({ name, platform, followers, followLink, watchLink }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="text-lg font-semibold">{name}</div>
      <div className="mt-1 text-xs text-white/60">{platform} • {followers.toLocaleString()} followers</div>
      <div className="mt-4 flex gap-2 text-xs">
        <a
          href={followLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-white text-black px-3 py-1.5 font-semibold hover:brightness-95"
        >
          Follow
        </a>
        <a
          href={watchLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-white/15 px-3 py-1.5 hover:bg-white/10"
        >
          Watch
        </a>
      </div>
    </div>
  );
}

export default function CreatorsSpotlight() {
  const creators = [
    { name: 'Mortal', platform: 'YouTube', followers: 7000000, followLink: 'https://www.youtube.com/@MortaLyt', watchLink: 'https://www.youtube.com/@MortaLyt' },
    { name: 'Dynamo Gaming', platform: 'YouTube', followers: 10_100_000, followLink: 'https://www.youtube.com/@DynamoGaming', watchLink: 'https://www.youtube.com/@DynamoGaming/live' },
    { name: 'Jonathan Gaming', platform: 'YouTube', followers: 6900000, followLink: 'https://youtube.com/JonathanGaming', watchLink: 'https://youtube.com/@JonathanGaming' },
    { name: 'CarryIsLive', platform: 'YouTube', followers: 12000000, followLink: 'https://youtube.com/CarryIsLive', watchLink: 'https://youtube.com/@CarryIsLive' },
    { name: 'Regaltos', platform: 'YouTube', followers: 2020000, followLink: 'https://www.youtube.com/@soulregaltos9810', watchLink: 'https://www.youtube.com/@soulregaltos9810' },
    { name: 'Levinho', platform: 'YouTube', followers: 11800000, followLink: 'https://youtube.com/Levinho', watchLink: 'https://youtube.com/@Levinho' },
    { name: 'Sevou', platform: 'YouTube', followers: 9000000, followLink: 'https://youtube.com/Sevou', watchLink: 'https://youtube.com/@Sevou' },
    { name: 'Wynn Curtis', platform: 'YouTube', followers: 2500000, followLink: 'https://youtube.com/WynnCurtis', watchLink: 'https://youtube.com/@WynnCurtis' },
    { name: 'TGLTN', platform: 'Twitch', followers: 1500000, followLink: 'https://twitch.tv/TGLTN', watchLink: 'https://twitch.tv/TGLTN/live' },
    { name: 'HollywoodBob', platform: 'Twitch', followers: 1700000, followLink: 'https://twitch.tv/HollywoodBob', watchLink: 'https://twitch.tv/HollywoodBob/live' },
    { name: 'Aculite', platform: 'YouTube', followers: 5000000, followLink: 'https://youtube.com/Aculite', watchLink: 'https://youtube.com/@Aculite' },
    { name: 'Muselk', platform: 'YouTube', followers: 8500000, followLink: 'https://youtube.com/Muselk', watchLink: 'https://youtube.com/@Muselk' },
    { name: 'Ali-A', platform: 'YouTube', followers: 16000000, followLink: 'https://youtube.com/AliA', watchLink: 'https://youtube.com/@AliA' },
    { name: 'Shroud', platform: 'Twitch', followers: 10000000, followLink: 'https://twitch.tv/Shroud', watchLink: 'https://twitch.tv/Shroud/live' },
    { name: 'Ninja', platform: 'Twitch', followers: 18000000, followLink: 'https://twitch.tv/Ninja', watchLink: 'https://twitch.tv/Ninja/live' }
  ];
  return (
    <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="font-semibold text-sm">Creators Spotlight</div>
      <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {creators.map(c => (
          <CreatorCard key={c.name} {...c} />
        ))}
      </div>
    </div>
  );
}
