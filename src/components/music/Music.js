import React, { useEffect, useState } from 'react';
import { useGetData } from '../../hooks';
import { Cursor } from '../Cursor';
import { NonDashboardPage } from '../Page';
import { MusicPlayer, MusicTable } from '.';

export const Music = () => {
    const { data: songs = [] } = useGetData('music');
    const [selectedSong, setSelectedSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying && !selectedSong) {
            setSelectedSong(songs[0]);
        }
    }, [isPlaying, selectedSong, songs]);

    return (
        <NonDashboardPage mainClassName="music">
            <NonDashboardPage.Header title='Music' />
            <MusicTable {...{ selectedSong, setSelectedSong, isPlaying, setIsPlaying }} />
            <MusicPlayer {...{ selectedSong, setSelectedSong, isPlaying, setIsPlaying }} />
            <Cursor />
        </NonDashboardPage>
    )
}