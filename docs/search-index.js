var N=null,E="",T="t",U="u",searchIndex={};
var R=["byteorder","result","Reads an unsigned n-bytes integer from the underlying…","Reads a signed n-bytes integer from the underlying reader.","usize","DEPRECATED.","Writes an unsigned n-bytes integer to the underlying writer.","Writes a signed n-bytes integer to the underlying writer.","read_u16","read_u24","read_u32","read_u48","read_u64","read_u128","read_uint","read_uint128","Reads an unsigned n-bytes integer from `buf`.","write_u16","write_u24","write_u32","write_u48","write_u64","write_u128","write_uint","write_uint128","Writes an unsigned integer `n` to `buf` using only `nbytes`.","read_i16","read_i24","read_i32","read_i48","read_i64","read_i128","read_int","read_int128","Reads a signed n-bytes integer from `buf`.","read_f32","Reads a IEEE754 single-precision (4 bytes) floating point…","read_f64","Reads a IEEE754 double-precision (8 bytes) floating point…","write_i16","write_i24","write_i32","write_i48","write_i64","write_i128","write_int","write_int128","Writes a signed integer `n` to `buf` using only `nbytes`.","write_f32","Writes a IEEE754 single-precision (4 bytes) floating point…","write_f64","Writes a IEEE754 double-precision (8 bytes) floating point…","read_u16_into","read_u32_into","read_u64_into","read_u128_into","read_i16_into","read_i32_into","read_i64_into","read_i128_into","read_f32_into","read_f32_into_unchecked","read_f64_into","Reads IEEE754 single-precision (4 bytes) floating point…","read_f64_into_unchecked","to_owned","clone_into","try_from","borrow_mut","try_into","write_u16_into","write_u32_into","write_u64_into","write_u128_into","from_slice_u16","from_slice_u32","from_slice_u64","from_slice_u128","from_slice_f32","from_slice_f64","bigendian","littleendian","ordering","partial_cmp","formatter","Reads an unsigned 8 bit integer from the underlying reader.","Reads a signed 8 bit integer from the underlying reader.","Reads an unsigned 16 bit integer from the underlying reader.","Reads a signed 16 bit integer from the underlying reader.","Reads an unsigned 24 bit integer from the underlying reader.","Reads a signed 24 bit integer from the underlying reader.","Reads an unsigned 32 bit integer from the underlying reader.","Reads a signed 32 bit integer from the underlying reader.","Reads an unsigned 48 bit integer from the underlying reader.","Reads a signed 48 bit integer from the underlying reader.","Reads an unsigned 64 bit integer from the underlying reader.","Reads a signed 64 bit integer from the underlying reader.","Reads an unsigned 128 bit integer from the underlying…","Reads a signed 128 bit integer from the underlying reader.","Reads a sequence of unsigned 16 bit integers from the…","Reads a sequence of unsigned 32 bit integers from the…","Reads a sequence of unsigned 64 bit integers from the…","Reads a sequence of unsigned 128 bit integers from the…","read_i8_into","Reads a sequence of signed 8 bit integers from the…","Reads a sequence of signed 16 bit integers from the…","Reads a sequence of signed 32 bit integers from the…","Reads a sequence of signed 64 bit integers from the…","Reads a sequence of signed 128 bit integers from the…","Reads a sequence of IEEE754 single-precision (4 bytes)…","Reads a sequence of IEEE754 double-precision (8 bytes)…","Writes an unsigned 8 bit integer to the underlying writer.","Writes a signed 8 bit integer to the underlying writer.","Writes an unsigned 16 bit integer to the underlying writer.","Writes a signed 16 bit integer to the underlying writer.","Writes an unsigned 24 bit integer to the underlying writer.","Writes a signed 24 bit integer to the underlying writer.","Writes an unsigned 32 bit integer to the underlying writer.","Writes a signed 32 bit integer to the underlying writer.","Writes an unsigned 48 bit integer to the underlying writer.","Writes a signed 48 bit integer to the underlying writer.","Writes an unsigned 64 bit integer to the underlying writer.","Writes a signed 64 bit integer to the underlying writer.","Writes an unsigned 128 bit integer to the underlying writer.","Writes a signed 128 bit integer to the underlying writer.","ReadBytesExt","WriteBytesExt","ByteOrder","BigEndian","LittleEndian","chunk_type","midinote","write_buffer","midinotesequence","midiformat","midiheader","miditrackheader","midichannelvoicemessage","type_id","midinotetype","midistatus","from_str","MIDINoteSequence","MIDIChannelVoiceMessage","MIDITrackHeader","MIDIHeader","MIDIFormat","MIDIStatus","MIDINoteType"];
searchIndex["libatm"]={"doc":"`libatm` is a library for generating and working with MIDI…","i":[[3,"MIDINote","libatm","MIDI note",N,N],[12,"note_type",E,E,0,N],[12,"octave",E,E,0,N],[3,R[142],E,"Container for sequence of `MIDINote`",N,N],[12,"notes",E,E,1,N],[3,R[143],E,"MIDI channel voice message",N,N],[12,"delta_time",E,E,2,N],[12,"status",E,E,2,N],[12,"note",E,E,2,N],[12,"velocity",E,E,2,N],[3,R[144],E,"MIDI track chunk header",N,N],[12,R[130],E,E,3,N],[12,"length",E,E,3,N],[3,R[145],E,"MIDI file header",N,N],[12,R[130],E,E,4,N],[12,"length",E,E,4,N],[12,"format",E,E,4,N],[12,"tracks",E,E,4,N],[12,"division",E,E,4,N],[3,"MIDIFile",E,"MIDI file representation",N,N],[12,"sequence",E,"Sequence of notes (MIDINoteSequence) from which the track…",5,N],[12,"format",E,"Format specification (should always be MIDIFormat::0)",5,N],[12,"tracks",E,"Number of tracks in MIDI file (should always be `1`)",5,N],[12,"division",E,"Number of ticks to represent a quarter-note (recommended…",5,N],[4,R[146],E,"MIDI file format",N,N],[13,"Format0",E,"Single track.",6,N],[13,"Format1",E,"One or more simultaneous tracks.",6,N],[13,"Format2",E,"One or more independent tracks.",6,N],[4,R[147],E,"MIDI message status",N,N],[13,"RunningStatus",E,"Assume status bytes of previous MIDI channel message",7,N],[13,"NoteOff",E,"Note released",7,N],[13,"NoteOn",E,"Note pressed",7,N],[13,"PolyphonicAftertouch",E,"Pressure on key after pressed down",7,N],[13,"ControlChange",E,"Controller value change",7,N],[13,"ProgramChange",E,"Change program (patch) number",7,N],[13,"Aftertouch",E,"Greatest pressure on key after pressed down",7,N],[13,"PitchWheelChange",E,"Chainge pitch wheel",7,N],[4,R[148],E,"MIDI note type",N,N],[13,"C",E,E,8,N],[13,"CSharp",E,E,8,N],[13,"D",E,E,8,N],[13,"DSharp",E,E,8,N],[13,"E",E,E,8,N],[13,"F",E,E,8,N],[13,"FSharp",E,E,8,N],[13,"G",E,E,8,N],[13,"GSharp",E,E,8,N],[13,"A",E,E,8,N],[13,"ASharp",E,E,8,N],[13,"B",E,E,8,N],[11,"new",E,"Create new `MIDINote`",0,[[["u32"],[R[139]]],[R[131]]]],[11,"convert",E,"Convert MIDI note to an integer representation (MIDI note…",0,[[["self"]],["u32"]]],[11,"new",E,E,1,[[["vec",[R[131]]],[R[131]]],[R[133]]]],[11,"new",E,"Create new `MIDIChannelVoiceMessage`",2,[[[R[131]],["u8"],[R[140]]],[R[137]]]],[11,R[132],E,"Write MIDI channel message to buffer",2,[[[T],["self"]],[R[1]]]],[11,"new",E,"Create new `MIDITrackHeader`",3,[[["u32"],["u8"],["vec",["u8"]]],[R[136]]]],[11,R[132],E,"Write track chunk header to buffer",3,[[[T],["self"]],[R[1]]]],[11,"new",E,"Create new `MIDIHeader`",4,[[["u32"],["u16"],["u8"],["vec",["u8"]],[R[134]]],[R[135]]]],[11,R[132],E,"Write header chunk to buffer",4,[[[T],["self"]],[R[1]]]],[11,"new",E,"Create new `MIDIFile`",5,[[["u16"],[R[133]],[R[134]]],["midifile"]]],[11,"gen_hash",E,"Generate unique hash for this file's `MIDINoteSequence`",5,[[["self"]],["string"]]],[11,"gen_header",E,"Generate header chunk (see: MIDIHeader)",5,[[["self"]],[R[135]]]],[11,"gen_track_size",E,"Generate the size in bytes of the track chunk once written…",5,[[["self"]],["u32"]]],[11,"gen_track_header",E,"Generate track chunk header (see: MIDITrackHeader)",5,[[["self"]],[R[136]]]],[11,"gen_track",E,"Generate track data (see: MIDIChannelVoiceMessage)",5,[[["self"]],[["vec",[R[137]]],[R[137]]]]],[11,"gen_size",E,"Generate the size in bytes of this MIDI file once written…",5,[[["self"]],["u32"]]],[11,R[132],E,"Write MIDI file to buffer",5,[[[T],["self"]],[R[1]]]],[11,"gen_buffer",E,"Generate buffer containing entire MIDI file",5,[[["self"]],[["vec",["u8"]],[R[1],["vec"]]]]],[11,"write_file",E,"Write MIDI file to path on disk",5,[[["str"],["self"]],[R[1]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[65],E,E,0,[[["self"]],[T]]],[11,R[66],E,E,0,[[[T],["self"]]]],[11,R[67],E,E,0,[[[U]],[R[1]]]],[11,"borrow",E,E,0,[[["self"]],[T]]],[11,R[68],E,E,0,[[["self"]],[T]]],[11,R[69],E,E,0,[[],[R[1]]]],[11,R[138],E,E,0,[[["self"]],["typeid"]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[65],E,E,1,[[["self"]],[T]]],[11,R[66],E,E,1,[[[T],["self"]]]],[11,R[67],E,E,1,[[[U]],[R[1]]]],[11,"borrow",E,E,1,[[["self"]],[T]]],[11,R[68],E,E,1,[[["self"]],[T]]],[11,R[69],E,E,1,[[],[R[1]]]],[11,R[138],E,E,1,[[["self"]],["typeid"]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[65],E,E,2,[[["self"]],[T]]],[11,R[66],E,E,2,[[[T],["self"]]]],[11,R[67],E,E,2,[[[U]],[R[1]]]],[11,"borrow",E,E,2,[[["self"]],[T]]],[11,R[68],E,E,2,[[["self"]],[T]]],[11,R[69],E,E,2,[[],[R[1]]]],[11,R[138],E,E,2,[[["self"]],["typeid"]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[65],E,E,3,[[["self"]],[T]]],[11,R[66],E,E,3,[[[T],["self"]]]],[11,R[67],E,E,3,[[[U]],[R[1]]]],[11,"borrow",E,E,3,[[["self"]],[T]]],[11,R[68],E,E,3,[[["self"]],[T]]],[11,R[69],E,E,3,[[],[R[1]]]],[11,R[138],E,E,3,[[["self"]],["typeid"]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[65],E,E,4,[[["self"]],[T]]],[11,R[66],E,E,4,[[[T],["self"]]]],[11,R[67],E,E,4,[[[U]],[R[1]]]],[11,"borrow",E,E,4,[[["self"]],[T]]],[11,R[68],E,E,4,[[["self"]],[T]]],[11,R[69],E,E,4,[[],[R[1]]]],[11,R[138],E,E,4,[[["self"]],["typeid"]]],[11,"from",E,E,5,[[[T]],[T]]],[11,"into",E,E,5,[[],[U]]],[11,R[65],E,E,5,[[["self"]],[T]]],[11,R[66],E,E,5,[[[T],["self"]]]],[11,R[67],E,E,5,[[[U]],[R[1]]]],[11,"borrow",E,E,5,[[["self"]],[T]]],[11,R[68],E,E,5,[[["self"]],[T]]],[11,R[69],E,E,5,[[],[R[1]]]],[11,R[138],E,E,5,[[["self"]],["typeid"]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[],[U]]],[11,R[65],E,E,6,[[["self"]],[T]]],[11,R[66],E,E,6,[[[T],["self"]]]],[11,R[67],E,E,6,[[[U]],[R[1]]]],[11,"borrow",E,E,6,[[["self"]],[T]]],[11,R[68],E,E,6,[[["self"]],[T]]],[11,R[69],E,E,6,[[],[R[1]]]],[11,R[138],E,E,6,[[["self"]],["typeid"]]],[11,"from",E,E,7,[[[T]],[T]]],[11,"into",E,E,7,[[],[U]]],[11,R[65],E,E,7,[[["self"]],[T]]],[11,R[66],E,E,7,[[[T],["self"]]]],[11,R[67],E,E,7,[[[U]],[R[1]]]],[11,"borrow",E,E,7,[[["self"]],[T]]],[11,R[68],E,E,7,[[["self"]],[T]]],[11,R[69],E,E,7,[[],[R[1]]]],[11,R[138],E,E,7,[[["self"]],["typeid"]]],[11,"from",E,E,8,[[[T]],[T]]],[11,"into",E,E,8,[[],[U]]],[11,R[65],E,E,8,[[["self"]],[T]]],[11,R[66],E,E,8,[[[T],["self"]]]],[11,R[67],E,E,8,[[[U]],[R[1]]]],[11,"borrow",E,E,8,[[["self"]],[T]]],[11,R[68],E,E,8,[[["self"]],[T]]],[11,R[69],E,E,8,[[],[R[1]]]],[11,R[138],E,E,8,[[["self"]],["typeid"]]],[11,"eq",E,E,8,[[[R[139]],["self"]],["bool"]]],[11,"eq",E,E,0,[[[R[131]],["self"]],["bool"]]],[11,"ne",E,E,0,[[[R[131]],["self"]],["bool"]]],[11,"eq",E,E,2,[[[R[137]],["self"]],["bool"]]],[11,"ne",E,E,2,[[[R[137]],["self"]],["bool"]]],[11,"eq",E,E,3,[[[R[136]],["self"]],["bool"]]],[11,"ne",E,E,3,[[[R[136]],["self"]],["bool"]]],[11,"eq",E,E,4,[[[R[135]],["self"]],["bool"]]],[11,"ne",E,E,4,[[[R[135]],["self"]],["bool"]]],[11,"clone",E,E,6,[[["self"]],[R[134]]]],[11,"clone",E,E,7,[[["self"]],[R[140]]]],[11,"clone",E,E,8,[[["self"]],[R[139]]]],[11,"clone",E,E,0,[[["self"]],[R[131]]]],[11,"clone",E,E,1,[[["self"]],[R[133]]]],[11,"clone",E,E,2,[[["self"]],[R[137]]]],[11,"clone",E,E,3,[[["self"]],[R[136]]]],[11,"clone",E,E,4,[[["self"]],[R[135]]]],[11,"clone",E,E,5,[[["self"]],["midifile"]]],[11,"fmt",E,E,6,[[[R[84]],["self"]],[R[1]]]],[11,"fmt",E,E,7,[[[R[84]],["self"]],[R[1]]]],[11,"fmt",E,E,8,[[[R[84]],["self"]],[R[1]]]],[11,"fmt",E,E,0,[[[R[84]],["self"]],[R[1]]]],[11,"fmt",E,E,1,[[[R[84]],["self"]],[R[1]]]],[11,"fmt",E,E,2,[[[R[84]],["self"]],[R[1]]]],[11,"fmt",E,E,3,[[[R[84]],["self"]],[R[1]]]],[11,"fmt",E,E,4,[[[R[84]],["self"]],[R[1]]]],[11,"fmt",E,E,5,[[[R[84]],["self"]],[R[1]]]],[11,R[141],E,E,8,[[["str"]],[R[1]]]],[11,R[141],E,E,0,[[["str"]],[R[1]]]],[11,R[141],E,E,1,[[["str"]],[R[1]]]]],"p":[[3,"MIDINote"],[3,R[142]],[3,R[143]],[3,R[144]],[3,R[145]],[3,"MIDIFile"],[4,R[146]],[4,R[147]],[4,R[148]]]};
searchIndex[R[0]]={"doc":"This crate provides convenience methods for encoding and…","i":[[4,R[128],R[0],"Defines big-endian serialization.",N,N],[4,R[129],E,"Defines little-endian serialization.",N,N],[6,"BE",E,"A type alias for [`BigEndian`].",N,N],[6,"LE",E,"A type alias for [`LittleEndian`].",N,N],[6,"NetworkEndian",E,"Defines network byte order serialization.",N,N],[6,"NativeEndian",E,"Defines system native-endian serialization.",N,N],[8,R[125],E,"Extends [`Read`] with methods for reading numbers. (For…",N,N],[11,"read_u8",E,R[85],0,[[["self"]],[["u8"],[R[1],["u8"]]]]],[11,"read_i8",E,R[86],0,[[["self"]],[[R[1],["i8"]],["i8"]]]],[11,R[8],E,R[87],0,[[["self"]],[[R[1],["u16"]],["u16"]]]],[11,R[26],E,R[88],0,[[["self"]],[[R[1],["i16"]],["i16"]]]],[11,R[9],E,R[89],0,[[["self"]],[["u32"],[R[1],["u32"]]]]],[11,R[27],E,R[90],0,[[["self"]],[["i32"],[R[1],["i32"]]]]],[11,R[10],E,R[91],0,[[["self"]],[["u32"],[R[1],["u32"]]]]],[11,R[28],E,R[92],0,[[["self"]],[["i32"],[R[1],["i32"]]]]],[11,R[11],E,R[93],0,[[["self"]],[[R[1],["u64"]],["u64"]]]],[11,R[29],E,R[94],0,[[["self"]],[[R[1],["i64"]],["i64"]]]],[11,R[12],E,R[95],0,[[["self"]],[[R[1],["u64"]],["u64"]]]],[11,R[30],E,R[96],0,[[["self"]],[[R[1],["i64"]],["i64"]]]],[11,R[13],E,R[97],0,[[["self"]],[[R[1],["u128"]],["u128"]]]],[11,R[31],E,R[98],0,[[["self"]],[["i128"],[R[1],["i128"]]]]],[11,R[14],E,R[2],0,[[["self"],[R[4]]],[[R[1],["u64"]],["u64"]]]],[11,R[32],E,R[3],0,[[["self"],[R[4]]],[[R[1],["i64"]],["i64"]]]],[11,R[15],E,R[2],0,[[["self"],[R[4]]],[[R[1],["u128"]],["u128"]]]],[11,R[33],E,R[3],0,[[["self"],[R[4]]],[["i128"],[R[1],["i128"]]]]],[11,R[35],E,R[36],0,[[["self"]],[[R[1],["f32"]],["f32"]]]],[11,R[37],E,R[38],0,[[["self"]],[[R[1],["f64"]],["f64"]]]],[11,R[52],E,R[99],0,[[["self"]],[R[1]]]],[11,R[53],E,R[100],0,[[["self"]],[R[1]]]],[11,R[54],E,R[101],0,[[["self"]],[R[1]]]],[11,R[55],E,R[102],0,[[["self"]],[R[1]]]],[11,R[103],E,R[104],0,[[["self"]],[R[1]]]],[11,R[56],E,R[105],0,[[["self"]],[R[1]]]],[11,R[57],E,R[106],0,[[["self"]],[R[1]]]],[11,R[58],E,R[107],0,[[["self"]],[R[1]]]],[11,R[59],E,R[108],0,[[["self"]],[R[1]]]],[11,R[60],E,R[109],0,[[["self"]],[R[1]]]],[11,R[61],E,R[5],0,[[["self"]],[R[1]]]],[11,R[62],E,R[110],0,[[["self"]],[R[1]]]],[11,R[64],E,R[5],0,[[["self"]],[R[1]]]],[8,R[126],E,"Extends [`Write`] with methods for writing numbers. (For…",N,N],[11,"write_u8",E,R[111],1,[[["self"],["u8"]],[R[1]]]],[11,"write_i8",E,R[112],1,[[["self"],["i8"]],[R[1]]]],[11,R[17],E,R[113],1,[[["self"],["u16"]],[R[1]]]],[11,R[39],E,R[114],1,[[["self"],["i16"]],[R[1]]]],[11,R[18],E,R[115],1,[[["u32"],["self"]],[R[1]]]],[11,R[40],E,R[116],1,[[["i32"],["self"]],[R[1]]]],[11,R[19],E,R[117],1,[[["u32"],["self"]],[R[1]]]],[11,R[41],E,R[118],1,[[["i32"],["self"]],[R[1]]]],[11,R[20],E,R[119],1,[[["self"],["u64"]],[R[1]]]],[11,R[42],E,R[120],1,[[["self"],["i64"]],[R[1]]]],[11,R[21],E,R[121],1,[[["self"],["u64"]],[R[1]]]],[11,R[43],E,R[122],1,[[["self"],["i64"]],[R[1]]]],[11,R[22],E,R[123],1,[[["self"],["u128"]],[R[1]]]],[11,R[44],E,R[124],1,[[["i128"],["self"]],[R[1]]]],[11,R[23],E,R[6],1,[[["self"],["u64"],[R[4]]],[R[1]]]],[11,R[45],E,R[7],1,[[["self"],["i64"],[R[4]]],[R[1]]]],[11,R[24],E,R[6],1,[[["self"],["u128"],[R[4]]],[R[1]]]],[11,R[46],E,R[7],1,[[["i128"],["self"],[R[4]]],[R[1]]]],[11,R[48],E,R[49],1,[[["self"],["f32"]],[R[1]]]],[11,R[50],E,R[51],1,[[["self"],["f64"]],[R[1]]]],[8,R[127],E,"`ByteOrder` describes types that can serialize integers as…",N,N],[10,R[8],E,"Reads an unsigned 16 bit integer from `buf`.",2,[[],["u16"]]],[11,R[9],E,"Reads an unsigned 24 bit integer from `buf`, stored in u32.",2,[[],["u32"]]],[10,R[10],E,"Reads an unsigned 32 bit integer from `buf`.",2,[[],["u32"]]],[11,R[11],E,"Reads an unsigned 48 bit integer from `buf`, stored in u64.",2,[[],["u64"]]],[10,R[12],E,"Reads an unsigned 64 bit integer from `buf`.",2,[[],["u64"]]],[10,R[13],E,"Reads an unsigned 128 bit integer from `buf`.",2,[[],["u128"]]],[10,R[14],E,R[16],2,[[[R[4]]],["u64"]]],[10,R[15],E,R[16],2,[[[R[4]]],["u128"]]],[10,R[17],E,"Writes an unsigned 16 bit integer `n` to `buf`.",2,[[["u16"]]]],[11,R[18],E,"Writes an unsigned 24 bit integer `n` to `buf`, stored in…",2,[[["u32"]]]],[10,R[19],E,"Writes an unsigned 32 bit integer `n` to `buf`.",2,[[["u32"]]]],[11,R[20],E,"Writes an unsigned 48 bit integer `n` to `buf`, stored in…",2,[[["u64"]]]],[10,R[21],E,"Writes an unsigned 64 bit integer `n` to `buf`.",2,[[["u64"]]]],[10,R[22],E,"Writes an unsigned 128 bit integer `n` to `buf`.",2,[[["u128"]]]],[10,R[23],E,R[25],2,[[["u64"],[R[4]]]]],[10,R[24],E,R[25],2,[[["u128"],[R[4]]]]],[11,R[26],E,"Reads a signed 16 bit integer from `buf`.",2,[[],["i16"]]],[11,R[27],E,"Reads a signed 24 bit integer from `buf`, stored in i32.",2,[[],["i32"]]],[11,R[28],E,"Reads a signed 32 bit integer from `buf`.",2,[[],["i32"]]],[11,R[29],E,"Reads a signed 48 bit integer from `buf`, stored in i64.",2,[[],["i64"]]],[11,R[30],E,"Reads a signed 64 bit integer from `buf`.",2,[[],["i64"]]],[11,R[31],E,"Reads a signed 128 bit integer from `buf`.",2,[[],["i128"]]],[11,R[32],E,R[34],2,[[[R[4]]],["i64"]]],[11,R[33],E,R[34],2,[[[R[4]]],["i128"]]],[11,R[35],E,R[36],2,[[],["f32"]]],[11,R[37],E,R[38],2,[[],["f64"]]],[11,R[39],E,"Writes a signed 16 bit integer `n` to `buf`.",2,[[["i16"]]]],[11,R[40],E,"Writes a signed 24 bit integer `n` to `buf`, stored in i32.",2,[[["i32"]]]],[11,R[41],E,"Writes a signed 32 bit integer `n` to `buf`.",2,[[["i32"]]]],[11,R[42],E,"Writes a signed 48 bit integer `n` to `buf`, stored in i64.",2,[[["i64"]]]],[11,R[43],E,"Writes a signed 64 bit integer `n` to `buf`.",2,[[["i64"]]]],[11,R[44],E,"Writes a signed 128 bit integer `n` to `buf`.",2,[[["i128"]]]],[11,R[45],E,R[47],2,[[["i64"],[R[4]]]]],[11,R[46],E,R[47],2,[[["i128"],[R[4]]]]],[11,R[48],E,R[49],2,[[["f32"]]]],[11,R[50],E,R[51],2,[[["f64"]]]],[10,R[52],E,"Reads unsigned 16 bit integers from `src` into `dst`.",2,[[]]],[10,R[53],E,"Reads unsigned 32 bit integers from `src` into `dst`.",2,[[]]],[10,R[54],E,"Reads unsigned 64 bit integers from `src` into `dst`.",2,[[]]],[10,R[55],E,"Reads unsigned 128 bit integers from `src` into `dst`.",2,[[]]],[11,R[56],E,"Reads signed 16 bit integers from `src` to `dst`.",2,[[]]],[11,R[57],E,"Reads signed 32 bit integers from `src` into `dst`.",2,[[]]],[11,R[58],E,"Reads signed 64 bit integers from `src` into `dst`.",2,[[]]],[11,R[59],E,"Reads signed 128 bit integers from `src` into `dst`.",2,[[]]],[11,R[60],E,R[63],2,[[]]],[11,R[61],E,R[5],2,[[]]],[11,R[62],E,R[63],2,[[]]],[11,R[64],E,R[5],2,[[]]],[10,R[70],E,"Writes unsigned 16 bit integers from `src` into `dst`.",2,[[]]],[10,R[71],E,"Writes unsigned 32 bit integers from `src` into `dst`.",2,[[]]],[10,R[72],E,"Writes unsigned 64 bit integers from `src` into `dst`.",2,[[]]],[10,R[73],E,"Writes unsigned 128 bit integers from `src` into `dst`.",2,[[]]],[11,"write_i16_into",E,"Writes signed 16 bit integers from `src` into `dst`.",2,[[]]],[11,"write_i32_into",E,"Writes signed 32 bit integers from `src` into `dst`.",2,[[]]],[11,"write_i64_into",E,"Writes signed 64 bit integers from `src` into `dst`.",2,[[]]],[11,"write_i128_into",E,"Writes signed 128 bit integers from `src` into `dst`.",2,[[]]],[11,"write_f32_into",E,"Writes IEEE754 single-precision (4 bytes) floating point…",2,[[]]],[11,"write_f64_into",E,"Writes IEEE754 double-precision (8 bytes) floating point…",2,[[]]],[10,R[74],E,"Converts the given slice of unsigned 16 bit integers to a…",2,[[]]],[10,R[75],E,"Converts the given slice of unsigned 32 bit integers to a…",2,[[]]],[10,R[76],E,"Converts the given slice of unsigned 64 bit integers to a…",2,[[]]],[10,R[77],E,"Converts the given slice of unsigned 128 bit integers to a…",2,[[]]],[11,"from_slice_i16",E,"Converts the given slice of signed 16 bit integers to a…",2,[[]]],[11,"from_slice_i32",E,"Converts the given slice of signed 32 bit integers to a…",2,[[]]],[11,"from_slice_i64",E,"Converts the given slice of signed 64 bit integers to a…",2,[[]]],[11,"from_slice_i128",E,"Converts the given slice of signed 128 bit integers to a…",2,[[]]],[10,R[78],E,"Converts the given slice of IEEE754 single-precision (4…",2,[[]]],[10,R[79],E,"Converts the given slice of IEEE754 double-precision (8…",2,[[]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[65],E,E,3,[[["self"]],[T]]],[11,R[66],E,E,3,[[[T],["self"]]]],[11,R[67],E,E,3,[[[U]],[R[1]]]],[11,"borrow",E,E,3,[[["self"]],[T]]],[11,R[68],E,E,3,[[["self"]],[T]]],[11,R[69],E,E,3,[[],[R[1]]]],[11,R[138],E,E,3,[[["self"]],["typeid"]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[65],E,E,4,[[["self"]],[T]]],[11,R[66],E,E,4,[[[T],["self"]]]],[11,R[67],E,E,4,[[[U]],[R[1]]]],[11,"borrow",E,E,4,[[["self"]],[T]]],[11,R[68],E,E,4,[[["self"]],[T]]],[11,R[69],E,E,4,[[],[R[1]]]],[11,R[138],E,E,4,[[["self"]],["typeid"]]],[11,R[8],E,E,3,[[],["u16"]]],[11,R[10],E,E,3,[[],["u32"]]],[11,R[12],E,E,3,[[],["u64"]]],[11,R[13],E,E,3,[[],["u128"]]],[11,R[14],E,E,3,[[[R[4]]],["u64"]]],[11,R[15],E,E,3,[[[R[4]]],["u128"]]],[11,R[17],E,E,3,[[["u16"]]]],[11,R[19],E,E,3,[[["u32"]]]],[11,R[21],E,E,3,[[["u64"]]]],[11,R[22],E,E,3,[[["u128"]]]],[11,R[23],E,E,3,[[["u64"],[R[4]]]]],[11,R[24],E,E,3,[[["u128"],[R[4]]]]],[11,R[52],E,E,3,[[]]],[11,R[53],E,E,3,[[]]],[11,R[54],E,E,3,[[]]],[11,R[55],E,E,3,[[]]],[11,R[70],E,E,3,[[]]],[11,R[71],E,E,3,[[]]],[11,R[72],E,E,3,[[]]],[11,R[73],E,E,3,[[]]],[11,R[74],E,E,3,[[]]],[11,R[75],E,E,3,[[]]],[11,R[76],E,E,3,[[]]],[11,R[77],E,E,3,[[]]],[11,R[78],E,E,3,[[]]],[11,R[79],E,E,3,[[]]],[11,R[8],E,E,4,[[],["u16"]]],[11,R[10],E,E,4,[[],["u32"]]],[11,R[12],E,E,4,[[],["u64"]]],[11,R[13],E,E,4,[[],["u128"]]],[11,R[14],E,E,4,[[[R[4]]],["u64"]]],[11,R[15],E,E,4,[[[R[4]]],["u128"]]],[11,R[17],E,E,4,[[["u16"]]]],[11,R[19],E,E,4,[[["u32"]]]],[11,R[21],E,E,4,[[["u64"]]]],[11,R[22],E,E,4,[[["u128"]]]],[11,R[23],E,E,4,[[["u64"],[R[4]]]]],[11,R[24],E,E,4,[[["u128"],[R[4]]]]],[11,R[52],E,E,4,[[]]],[11,R[53],E,E,4,[[]]],[11,R[54],E,E,4,[[]]],[11,R[55],E,E,4,[[]]],[11,R[70],E,E,4,[[]]],[11,R[71],E,E,4,[[]]],[11,R[72],E,E,4,[[]]],[11,R[73],E,E,4,[[]]],[11,R[74],E,E,4,[[]]],[11,R[75],E,E,4,[[]]],[11,R[76],E,E,4,[[]]],[11,R[77],E,E,4,[[]]],[11,R[78],E,E,4,[[]]],[11,R[79],E,E,4,[[]]],[11,"eq",E,E,3,[[["self"],[R[80]]],["bool"]]],[11,"eq",E,E,4,[[[R[81]],["self"]],["bool"]]],[11,"default",E,E,3,[[],[R[80]]]],[11,"default",E,E,4,[[],[R[81]]]],[11,"clone",E,E,3,[[["self"]],[R[80]]]],[11,"clone",E,E,4,[[["self"]],[R[81]]]],[11,"cmp",E,E,3,[[["self"],[R[80]]],[R[82]]]],[11,"cmp",E,E,4,[[[R[81]],["self"]],[R[82]]]],[11,R[83],E,E,3,[[["self"],[R[80]]],[["option",[R[82]]],[R[82]]]]],[11,R[83],E,E,4,[[[R[81]],["self"]],[["option",[R[82]]],[R[82]]]]],[11,"fmt",E,E,3,[[[R[84]],["self"]],[R[1]]]],[11,"fmt",E,E,4,[[[R[84]],["self"]],[R[1]]]],[11,"hash",E,E,3,[[["self"],["__h"]]]],[11,"hash",E,E,4,[[["self"],["__h"]]]],[11,"read_u8",E,R[85],0,[[["self"]],[["u8"],[R[1],["u8"]]]]],[11,"read_i8",E,R[86],0,[[["self"]],[[R[1],["i8"]],["i8"]]]],[11,R[8],E,R[87],0,[[["self"]],[[R[1],["u16"]],["u16"]]]],[11,R[26],E,R[88],0,[[["self"]],[[R[1],["i16"]],["i16"]]]],[11,R[9],E,R[89],0,[[["self"]],[["u32"],[R[1],["u32"]]]]],[11,R[27],E,R[90],0,[[["self"]],[["i32"],[R[1],["i32"]]]]],[11,R[10],E,R[91],0,[[["self"]],[["u32"],[R[1],["u32"]]]]],[11,R[28],E,R[92],0,[[["self"]],[["i32"],[R[1],["i32"]]]]],[11,R[11],E,R[93],0,[[["self"]],[[R[1],["u64"]],["u64"]]]],[11,R[29],E,R[94],0,[[["self"]],[[R[1],["i64"]],["i64"]]]],[11,R[12],E,R[95],0,[[["self"]],[[R[1],["u64"]],["u64"]]]],[11,R[30],E,R[96],0,[[["self"]],[[R[1],["i64"]],["i64"]]]],[11,R[13],E,R[97],0,[[["self"]],[[R[1],["u128"]],["u128"]]]],[11,R[31],E,R[98],0,[[["self"]],[["i128"],[R[1],["i128"]]]]],[11,R[14],E,R[2],0,[[["self"],[R[4]]],[[R[1],["u64"]],["u64"]]]],[11,R[32],E,R[3],0,[[["self"],[R[4]]],[[R[1],["i64"]],["i64"]]]],[11,R[15],E,R[2],0,[[["self"],[R[4]]],[[R[1],["u128"]],["u128"]]]],[11,R[33],E,R[3],0,[[["self"],[R[4]]],[["i128"],[R[1],["i128"]]]]],[11,R[35],E,R[36],0,[[["self"]],[[R[1],["f32"]],["f32"]]]],[11,R[37],E,R[38],0,[[["self"]],[[R[1],["f64"]],["f64"]]]],[11,R[52],E,R[99],0,[[["self"]],[R[1]]]],[11,R[53],E,R[100],0,[[["self"]],[R[1]]]],[11,R[54],E,R[101],0,[[["self"]],[R[1]]]],[11,R[55],E,R[102],0,[[["self"]],[R[1]]]],[11,R[103],E,R[104],0,[[["self"]],[R[1]]]],[11,R[56],E,R[105],0,[[["self"]],[R[1]]]],[11,R[57],E,R[106],0,[[["self"]],[R[1]]]],[11,R[58],E,R[107],0,[[["self"]],[R[1]]]],[11,R[59],E,R[108],0,[[["self"]],[R[1]]]],[11,R[60],E,R[109],0,[[["self"]],[R[1]]]],[11,R[61],E,R[5],0,[[["self"]],[R[1]]]],[11,R[62],E,R[110],0,[[["self"]],[R[1]]]],[11,R[64],E,R[5],0,[[["self"]],[R[1]]]],[11,"write_u8",E,R[111],1,[[["self"],["u8"]],[R[1]]]],[11,"write_i8",E,R[112],1,[[["self"],["i8"]],[R[1]]]],[11,R[17],E,R[113],1,[[["self"],["u16"]],[R[1]]]],[11,R[39],E,R[114],1,[[["self"],["i16"]],[R[1]]]],[11,R[18],E,R[115],1,[[["u32"],["self"]],[R[1]]]],[11,R[40],E,R[116],1,[[["i32"],["self"]],[R[1]]]],[11,R[19],E,R[117],1,[[["u32"],["self"]],[R[1]]]],[11,R[41],E,R[118],1,[[["i32"],["self"]],[R[1]]]],[11,R[20],E,R[119],1,[[["self"],["u64"]],[R[1]]]],[11,R[42],E,R[120],1,[[["self"],["i64"]],[R[1]]]],[11,R[21],E,R[121],1,[[["self"],["u64"]],[R[1]]]],[11,R[43],E,R[122],1,[[["self"],["i64"]],[R[1]]]],[11,R[22],E,R[123],1,[[["self"],["u128"]],[R[1]]]],[11,R[44],E,R[124],1,[[["i128"],["self"]],[R[1]]]],[11,R[23],E,R[6],1,[[["self"],["u64"],[R[4]]],[R[1]]]],[11,R[45],E,R[7],1,[[["self"],["i64"],[R[4]]],[R[1]]]],[11,R[24],E,R[6],1,[[["self"],["u128"],[R[4]]],[R[1]]]],[11,R[46],E,R[7],1,[[["i128"],["self"],[R[4]]],[R[1]]]],[11,R[48],E,R[49],1,[[["self"],["f32"]],[R[1]]]],[11,R[50],E,R[51],1,[[["self"],["f64"]],[R[1]]]]],"p":[[8,R[125]],[8,R[126]],[8,R[127]],[4,R[128]],[4,R[129]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);