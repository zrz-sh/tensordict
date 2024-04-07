window.BENCHMARK_DATA = {
  "lastUpdate": 1712478324135,
  "repoUrl": "https://github.com/zrz-sh/tensordict",
  "entries": {
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "vmoens@meta.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6b6a4b3513cc8ad330af820f33aa13157fd7f0e",
          "message": "[BugFix, Feature] tensorclass.to_dict and from_dict (#707)",
          "timestamp": "2024-03-13T20:38:02Z",
          "tree_id": "0e1f61f3a0bd97b3f72a382fe036dcddb3250ae1",
          "url": "https://github.com/zrz-sh/tensordict/commit/d6b6a4b3513cc8ad330af820f33aa13157fd7f0e"
        },
        "date": 1712478323509,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_plain_set_nested",
            "value": 57931.241129545335,
            "unit": "iter/sec",
            "range": "stddev: 7.936477390796955e-7",
            "extra": "mean: 17.261843186887862 usec\nrounds: 8322"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_plain_set_stack_nested",
            "value": 57028.6415652891,
            "unit": "iter/sec",
            "range": "stddev: 8.928677231104351e-7",
            "extra": "mean: 17.535048574761376 usec\nrounds: 17293"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_plain_set_nested_inplace",
            "value": 49913.29667002159,
            "unit": "iter/sec",
            "range": "stddev: 0.000001556057265187569",
            "extra": "mean: 20.034741576198265 usec\nrounds: 29262"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_plain_set_stack_nested_inplace",
            "value": 50257.20576217215,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011095746372847879",
            "extra": "mean: 19.8976442250334 usec\nrounds: 32737"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items",
            "value": 399310.3938219568,
            "unit": "iter/sec",
            "range": "stddev: 1.9724982482922775e-7",
            "extra": "mean: 2.504317482018454 usec\nrounds: 93284"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_nested",
            "value": 3709.0916398703685,
            "unit": "iter/sec",
            "range": "stddev: 0.000015398691274727233",
            "extra": "mean: 269.6077900180837 usec\nrounds: 3186"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_nested_locked",
            "value": 3689.3103404066464,
            "unit": "iter/sec",
            "range": "stddev: 0.00001315050010670201",
            "extra": "mean: 271.05336979858873 usec\nrounds: 3629"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_nested_leaf",
            "value": 5995.224547672449,
            "unit": "iter/sec",
            "range": "stddev: 0.000008058041428574777",
            "extra": "mean: 166.79942378275626 usec\nrounds: 5281"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_stack_nested",
            "value": 3682.103229624993,
            "unit": "iter/sec",
            "range": "stddev: 0.000004290538235336348",
            "extra": "mean: 271.5839121386735 usec\nrounds: 3460"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_stack_nested_leaf",
            "value": 5938.43483649352,
            "unit": "iter/sec",
            "range": "stddev: 0.000009373534955817444",
            "extra": "mean: 168.39453956027106 usec\nrounds: 5460"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_stack_nested_locked",
            "value": 3688.761313587595,
            "unit": "iter/sec",
            "range": "stddev: 0.000011180906101956026",
            "extra": "mean: 271.09371276381813 usec\nrounds: 3471"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys",
            "value": 248833.24813751815,
            "unit": "iter/sec",
            "range": "stddev: 2.5001730747654247e-7",
            "extra": "mean: 4.018755562147982 usec\nrounds: 121581"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_nested",
            "value": 6950.0214052594065,
            "unit": "iter/sec",
            "range": "stddev: 0.00002585124510480934",
            "extra": "mean: 143.88444893756056 usec\nrounds: 5689"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_nested_locked",
            "value": 6728.327418860031,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040703265439657125",
            "extra": "mean: 148.62534739271476 usec\nrounds: 6235"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_nested_leaf",
            "value": 7928.588182068367,
            "unit": "iter/sec",
            "range": "stddev: 0.000006352288906901812",
            "extra": "mean: 126.12585961541583 usec\nrounds: 6817"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_stack_nested",
            "value": 6803.049276989064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033954340098064395",
            "extra": "mean: 146.9929085156629 usec\nrounds: 5990"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_stack_nested_leaf",
            "value": 7719.773199033698,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053566768584030916",
            "extra": "mean: 129.53748435578035 usec\nrounds: 6712"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_stack_nested_locked",
            "value": 6646.166723713787,
            "unit": "iter/sec",
            "range": "stddev: 0.000009748889513252615",
            "extra": "mean: 150.4626714271191 usec\nrounds: 6090"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values",
            "value": 877181.0898152629,
            "unit": "iter/sec",
            "range": "stddev: 6.378546749523794e-8",
            "extra": "mean: 1.1400154558856188 usec\nrounds: 156691"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_nested",
            "value": 19259.84062307476,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017502138785739747",
            "extra": "mean: 51.92150961010153 usec\nrounds: 15037"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_nested_locked",
            "value": 19498.253776438716,
            "unit": "iter/sec",
            "range": "stddev: 0.000005093662188186039",
            "extra": "mean: 51.28664399723729 usec\nrounds: 17233"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_nested_leaf",
            "value": 21741.998398887034,
            "unit": "iter/sec",
            "range": "stddev: 0.00000168139862444035",
            "extra": "mean: 45.993932188459254 usec\nrounds: 18050"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_stack_nested",
            "value": 19290.884789501524,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027505719724126752",
            "extra": "mean: 51.837954086181654 usec\nrounds: 15834"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_stack_nested_leaf",
            "value": 21715.37886546403,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014839181554912933",
            "extra": "mean: 46.05031329158122 usec\nrounds: 17447"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_stack_nested_locked",
            "value": 19087.80647289207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025789818081345566",
            "extra": "mean: 52.38946661682526 usec\nrounds: 17329"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership",
            "value": 738989.0579831443,
            "unit": "iter/sec",
            "range": "stddev: 1.479813571360684e-7",
            "extra": "mean: 1.3532000091167915 usec\nrounds: 153563"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_nested",
            "value": 290315.5143706071,
            "unit": "iter/sec",
            "range": "stddev: 2.7385336758986757e-7",
            "extra": "mean: 3.4445282821621217 usec\nrounds: 102680"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_nested_leaf",
            "value": 285980.15353478416,
            "unit": "iter/sec",
            "range": "stddev: 3.5244824913007907e-7",
            "extra": "mean: 3.4967461470306844 usec\nrounds: 121271"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_stacked_nested",
            "value": 283931.1735536487,
            "unit": "iter/sec",
            "range": "stddev: 6.474569993601916e-7",
            "extra": "mean: 3.521980300662725 usec\nrounds: 82285"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_stacked_nested_leaf",
            "value": 275247.6940037115,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016711522532008918",
            "extra": "mean: 3.6330912911717834 usec\nrounds: 86416"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_nested_last",
            "value": 224562.58043684074,
            "unit": "iter/sec",
            "range": "stddev: 6.459975234223762e-7",
            "extra": "mean: 4.4531016612594305 usec\nrounds: 106068"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_nested_leaf_last",
            "value": 228742.224153572,
            "unit": "iter/sec",
            "range": "stddev: 4.847101568940025e-7",
            "extra": "mean: 4.371733306783903 usec\nrounds: 102376"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_stacked_nested_last",
            "value": 169848.0515486346,
            "unit": "iter/sec",
            "range": "stddev: 3.9123260104316226e-7",
            "extra": "mean: 5.8876153766983785 usec\nrounds: 55982"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_stacked_nested_leaf_last",
            "value": 168160.22234052263,
            "unit": "iter/sec",
            "range": "stddev: 4.2376460395206456e-7",
            "extra": "mean: 5.946709549271473 usec\nrounds: 59239"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_nested_getleaf",
            "value": 93950.74266515864,
            "unit": "iter/sec",
            "range": "stddev: 5.269829813731275e-7",
            "extra": "mean: 10.643875414205182 usec\nrounds: 68555"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_nested_get",
            "value": 98766.1324406684,
            "unit": "iter/sec",
            "range": "stddev: 7.787563847172309e-7",
            "extra": "mean: 10.124928204521202 usec\nrounds: 76133"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_stacked_getleaf",
            "value": 94205.21531454669,
            "unit": "iter/sec",
            "range": "stddev: 5.376969948633679e-7",
            "extra": "mean: 10.615123554052161 usec\nrounds: 56712"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_stacked_get",
            "value": 98760.09844198478,
            "unit": "iter/sec",
            "range": "stddev: 7.164045283916123e-7",
            "extra": "mean: 10.12554681268808 usec\nrounds: 58852"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_nested_getitemleaf",
            "value": 89429.10344524051,
            "unit": "iter/sec",
            "range": "stddev: 7.068959264199697e-7",
            "extra": "mean: 11.182042103467166 usec\nrounds: 54366"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_nested_getitem",
            "value": 97147.5547359989,
            "unit": "iter/sec",
            "range": "stddev: 7.050887971119276e-7",
            "extra": "mean: 10.293619872548794 usec\nrounds: 69653"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_stacked_getitemleaf",
            "value": 89455.84705052749,
            "unit": "iter/sec",
            "range": "stddev: 7.751920713528966e-7",
            "extra": "mean: 11.178699134503399 usec\nrounds: 53263"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_stacked_getitem",
            "value": 96782.48799236555,
            "unit": "iter/sec",
            "range": "stddev: 4.990603088211303e-7",
            "extra": "mean: 10.33244774694036 usec\nrounds: 56456"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_lock_nested",
            "value": 2946.353499661714,
            "unit": "iter/sec",
            "range": "stddev: 0.00016547746726491258",
            "extra": "mean: 339.4025869994266 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_lock_stack_nested",
            "value": 3337.0475339703953,
            "unit": "iter/sec",
            "range": "stddev: 0.000008636389606969889",
            "extra": "mean: 299.6660940008269 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unlock_nested",
            "value": 2421.5905213778647,
            "unit": "iter/sec",
            "range": "stddev: 0.00237301956316165",
            "extra": "mean: 412.95173200091995 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unlock_stack_nested",
            "value": 3229.9766119005394,
            "unit": "iter/sec",
            "range": "stddev: 0.000008528699620550336",
            "extra": "mean: 309.59976500002995 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_flatten_speed",
            "value": 3765.655643178069,
            "unit": "iter/sec",
            "range": "stddev: 0.000008252504447151726",
            "extra": "mean: 265.55800496830307 usec\nrounds: 3220"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unflatten_speed",
            "value": 2467.1587301524737,
            "unit": "iter/sec",
            "range": "stddev: 0.000010703277472584445",
            "extra": "mean: 405.3245491578885 usec\nrounds: 2309"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1406.0958837986168,
            "unit": "iter/sec",
            "range": "stddev: 0.00016457842749176908",
            "extra": "mean: 711.1890529815544 usec\nrounds: 906"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 546789.5944147083,
            "unit": "iter/sec",
            "range": "stddev: 1.589115789828516e-7",
            "extra": "mean: 1.8288570415653482 usec\nrounds: 119818"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 85688.5955180705,
            "unit": "iter/sec",
            "range": "stddev: 7.493087207694463e-7",
            "extra": "mean: 11.670164436166004 usec\nrounds: 19503"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 69965.86715316834,
            "unit": "iter/sec",
            "range": "stddev: 7.963878648008319e-7",
            "extra": "mean: 14.29268357113067 usec\nrounds: 22716"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 57321.41823009449,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011845645006865975",
            "extra": "mean: 17.445486013376183 usec\nrounds: 22629"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 75852.61134099527,
            "unit": "iter/sec",
            "range": "stddev: 0.000001988860987803845",
            "extra": "mean: 13.183461746682681 usec\nrounds: 13659"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[int]",
            "value": 89947.7789807346,
            "unit": "iter/sec",
            "range": "stddev: 8.205461872821981e-7",
            "extra": "mean: 11.117561893486933 usec\nrounds: 11956"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[slice_int]",
            "value": 44757.51671046927,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026178196389498827",
            "extra": "mean: 22.34261579946166 usec\nrounds: 11317"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[range]",
            "value": 23698.193256642986,
            "unit": "iter/sec",
            "range": "stddev: 0.000004678395979727669",
            "extra": "mean: 42.19730969236163 usec\nrounds: 5922"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[tuple]",
            "value": 55364.55754490932,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014710061180931124",
            "extra": "mean: 18.06209684216917 usec\nrounds: 19919"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[list]",
            "value": 26895.770015407437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028815782161541806",
            "extra": "mean: 37.18056777802393 usec\nrounds: 8845"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[int]",
            "value": 28841.86888630158,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034521876425666676",
            "extra": "mean: 34.67181700125366 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[slice_int]",
            "value": 16655.86617080665,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035428196547434363",
            "extra": "mean: 60.038906997988306 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[range]",
            "value": 12787.757307717295,
            "unit": "iter/sec",
            "range": "stddev: 0.000004275298548949097",
            "extra": "mean: 78.19979500209229 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[tuple]",
            "value": 19978.678355210915,
            "unit": "iter/sec",
            "range": "stddev: 0.000005391929226389383",
            "extra": "mean: 50.053360999186225 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 48095.52037370351,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027401933895370825",
            "extra": "mean: 20.791957176676174 usec\nrounds: 16323"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 50911.3811788447,
            "unit": "iter/sec",
            "range": "stddev: 0.00001199592130265027",
            "extra": "mean: 19.641973500721523 usec\nrounds: 17623"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7085.398795568852,
            "unit": "iter/sec",
            "range": "stddev: 0.00011093918681781156",
            "extra": "mean: 141.1353162824641 usec\nrounds: 4066"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 43489.05219363493,
            "unit": "iter/sec",
            "range": "stddev: 0.000001841781861832327",
            "extra": "mean: 22.99429280609524 usec\nrounds: 24979"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 32878.00084354186,
            "unit": "iter/sec",
            "range": "stddev: 0.000002034981192325125",
            "extra": "mean: 30.41547461351889 usec\nrounds: 14949"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update__nested",
            "value": 42164.445921585924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018271965813053052",
            "extra": "mean: 23.716664079013874 usec\nrounds: 12622"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 46079.60550702492,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018241799045346809",
            "extra": "mean: 21.701574677056385 usec\nrounds: 17629"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 38890.96517981459,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018088580116936668",
            "extra": "mean: 25.712912893173083 usec\nrounds: 15326"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 24995.477103493486,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024874243038047193",
            "extra": "mean: 40.007237943869264 usec\nrounds: 11301"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select_nested",
            "value": 16841.695040351122,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023477171047405603",
            "extra": "mean: 59.376446230862975 usec\nrounds: 11382"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_exclude_nested",
            "value": 8484.403401324797,
            "unit": "iter/sec",
            "range": "stddev: 0.000004082973335667264",
            "extra": "mean: 117.86332552785679 usec\nrounds: 5296"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_empty[True]",
            "value": 2433.298692750117,
            "unit": "iter/sec",
            "range": "stddev: 0.00000873566934186577",
            "extra": "mean: 410.9647545447036 usec\nrounds: 2200"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_empty[False]",
            "value": 957044.8635846168,
            "unit": "iter/sec",
            "range": "stddev: 6.250394735994072e-8",
            "extra": "mean: 1.044883095923504 usec\nrounds: 180832"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unbind_speed",
            "value": 4030.99368594854,
            "unit": "iter/sec",
            "range": "stddev: 0.00001257870282298813",
            "extra": "mean: 248.07778873131338 usec\nrounds: 568"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unbind_speed_stack0",
            "value": 4160.8668523527485,
            "unit": "iter/sec",
            "range": "stddev: 0.00000788849472999541",
            "extra": "mean: 240.3345349622407 usec\nrounds: 3604"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unbind_speed_stack1",
            "value": 1474.8032357034756,
            "unit": "iter/sec",
            "range": "stddev: 0.0032340275437459536",
            "extra": "mean: 678.0565541158471 usec\nrounds: 1543"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_split",
            "value": 607.248401009668,
            "unit": "iter/sec",
            "range": "stddev: 0.004385648519131691",
            "extra": "mean: 1.6467725535996578 msec\nrounds: 625"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_chunk",
            "value": 681.1189876256593,
            "unit": "iter/sec",
            "range": "stddev: 0.000027404027976783244",
            "extra": "mean: 1.4681722550210223 msec\nrounds: 647"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 9870.480984795922,
            "unit": "iter/sec",
            "range": "stddev: 0.000006696133466382397",
            "extra": "mean: 101.31218544874949 usec\nrounds: 2653"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 12306.701413816703,
            "unit": "iter/sec",
            "range": "stddev: 0.000055238277532425205",
            "extra": "mean: 81.25654197454587 usec\nrounds: 8934"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 191187.54028709227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015756566506782552",
            "extra": "mean: 5.230466370864825 usec\nrounds: 23908"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 1580780.0668097558,
            "unit": "iter/sec",
            "range": "stddev: 1.0251447372645078e-7",
            "extra": "mean: 632.599069912455 nsec\nrounds: 69653"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 283864.5592551499,
            "unit": "iter/sec",
            "range": "stddev: 4.201515229743435e-7",
            "extra": "mean: 3.5228068013279397 usec\nrounds: 26289"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_memmaptd_index",
            "value": 4247.447592362569,
            "unit": "iter/sec",
            "range": "stddev: 0.00005513058879655451",
            "extra": "mean: 235.43551232936284 usec\nrounds: 1825"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_memmaptd_index_astensor",
            "value": 3353.5436239613514,
            "unit": "iter/sec",
            "range": "stddev: 0.00009384832752010144",
            "extra": "mean: 298.19203568873115 usec\nrounds: 2830"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_memmaptd_index_op",
            "value": 1660.3980096817209,
            "unit": "iter/sec",
            "range": "stddev: 0.00005324341895815264",
            "extra": "mean: 602.2652365089792 usec\nrounds: 1501"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_model",
            "value": 8.500422544317013,
            "unit": "iter/sec",
            "range": "stddev: 0.044707559014094504",
            "extra": "mean: 117.64121074999423 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_model_pickle",
            "value": 2.6205653491069394,
            "unit": "iter/sec",
            "range": "stddev: 0.08027807758850554",
            "extra": "mean: 381.59704749999435 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_weights",
            "value": 10.143070005683768,
            "unit": "iter/sec",
            "range": "stddev: 0.0027006006413132872",
            "extra": "mean: 98.5894802500269 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_weights_returnearly",
            "value": 7.531759295847888,
            "unit": "iter/sec",
            "range": "stddev: 0.021776386902211963",
            "extra": "mean: 132.77110442858688 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_weights_pickle",
            "value": 2.3257583098337915,
            "unit": "iter/sec",
            "range": "stddev: 0.019336431488108832",
            "extra": "mean: 429.9672910000112 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_weights_filesystem",
            "value": 10.646224235445182,
            "unit": "iter/sec",
            "range": "stddev: 0.0033849596984276724",
            "extra": "mean: 93.93001480004841 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_model_filesystem",
            "value": 10.530238257878901,
            "unit": "iter/sec",
            "range": "stddev: 0.004629284048179413",
            "extra": "mean: 94.96461290909379 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 48158.82007420268,
            "unit": "iter/sec",
            "range": "stddev: 9.467010182162442e-7",
            "extra": "mean: 20.76462833722273 usec\nrounds: 10827"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 31437.0353911754,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021986258369988332",
            "extra": "mean: 31.80961523746947 usec\nrounds: 8387"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 48469.543474865925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020390210117956134",
            "extra": "mean: 20.631512663587475 usec\nrounds: 18675"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 16481.03602505204,
            "unit": "iter/sec",
            "range": "stddev: 0.0013253469170671675",
            "extra": "mean: 60.67579723021948 usec\nrounds: 8882"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 41115.868832898865,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014923044469188329",
            "extra": "mean: 24.321509635711504 usec\nrounds: 9911"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 28124.547675460813,
            "unit": "iter/sec",
            "range": "stddev: 0.000003844863325280675",
            "extra": "mean: 35.55612739231779 usec\nrounds: 12905"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 42070.906046595504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022824131422816143",
            "extra": "mean: 23.769395384364984 usec\nrounds: 8665"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 25311.355979834887,
            "unit": "iter/sec",
            "range": "stddev: 0.000002124385104368648",
            "extra": "mean: 39.50795843560031 usec\nrounds: 11308"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 34246.5162242884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018954619768692917",
            "extra": "mean: 29.200050406609748 usec\nrounds: 9225"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 17979.913168593077,
            "unit": "iter/sec",
            "range": "stddev: 0.000004711448527703213",
            "extra": "mean: 55.61762121002777 usec\nrounds: 6959"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 9739.189200527664,
            "unit": "iter/sec",
            "range": "stddev: 0.000007024506444160723",
            "extra": "mean: 102.67795187158092 usec\nrounds: 4114"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdmodule",
            "value": 54648.67297480691,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020239432754399453",
            "extra": "mean: 18.298705998972764 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdmodule_dispatch",
            "value": 27834.34412458221,
            "unit": "iter/sec",
            "range": "stddev: 0.000002468873445390309",
            "extra": "mean: 35.92683899876192 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdseq",
            "value": 46871.3974957553,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013376647605851223",
            "extra": "mean: 21.334972999056845 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdseq_dispatch",
            "value": 24571.9649705332,
            "unit": "iter/sec",
            "range": "stddev: 0.000001808040249988791",
            "extra": "mean: 40.69678599978488 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 768.5243087536101,
            "unit": "iter/sec",
            "range": "stddev: 0.00005098581219389662",
            "extra": "mean: 1.3011950157071759 msec\nrounds: 573"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 994.1409224852542,
            "unit": "iter/sec",
            "range": "stddev: 0.0001295973032469278",
            "extra": "mean: 1.0058936086245183 msec\nrounds: 626"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 6362.696645843549,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071065747484668746",
            "extra": "mean: 157.16606584619322 usec\nrounds: 2764"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functional_call",
            "value": 6750.277255653296,
            "unit": "iter/sec",
            "range": "stddev: 0.000007025661633605771",
            "extra": "mean: 148.142063225997 usec\nrounds: 4049"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 7053.245959992662,
            "unit": "iter/sec",
            "range": "stddev: 0.000007524739766872283",
            "extra": "mean: 141.77869390521585 usec\nrounds: 2166"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td_decorator",
            "value": 5194.014014459317,
            "unit": "iter/sec",
            "range": "stddev: 0.000016125871963271927",
            "extra": "mean: 192.5293226425954 usec\nrounds: 3118"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed[True-True]",
            "value": 2126.200347978059,
            "unit": "iter/sec",
            "range": "stddev: 0.00002301070471028614",
            "extra": "mean: 470.32256435804106 usec\nrounds: 1919"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed[True-False]",
            "value": 2146.134128851943,
            "unit": "iter/sec",
            "range": "stddev: 0.000014251432988247034",
            "extra": "mean: 465.9541016362019 usec\nrounds: 2017"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed[False-True]",
            "value": 2631.610263192497,
            "unit": "iter/sec",
            "range": "stddev: 0.000018001238961737482",
            "extra": "mean: 379.99547804881473 usec\nrounds: 2460"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed[False-False]",
            "value": 2623.2811091371973,
            "unit": "iter/sec",
            "range": "stddev: 0.000016802848224918573",
            "extra": "mean: 381.2019979547301 usec\nrounds: 2445"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed_decorator[True-True]",
            "value": 2041.8323295270436,
            "unit": "iter/sec",
            "range": "stddev: 0.000028714093138263076",
            "extra": "mean: 489.7561790647292 usec\nrounds: 1882"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed_decorator[True-False]",
            "value": 2032.7548310483876,
            "unit": "iter/sec",
            "range": "stddev: 0.000023519806053811503",
            "extra": "mean: 491.94324112576464 usec\nrounds: 1916"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed_decorator[False-True]",
            "value": 2518.790348005572,
            "unit": "iter/sec",
            "range": "stddev: 0.000016347122092154117",
            "extra": "mean: 397.01597268380027 usec\nrounds: 1684"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed_decorator[False-False]",
            "value": 2506.018383825197,
            "unit": "iter/sec",
            "range": "stddev: 0.000019251664605462592",
            "extra": "mean: 399.03937116119465 usec\nrounds: 2344"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_to_module_speed[True]",
            "value": 731.0948069464583,
            "unit": "iter/sec",
            "range": "stddev: 0.00001777557528520681",
            "extra": "mean: 1.3678116579389614 msec\nrounds: 611"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_to_module_speed[False]",
            "value": 742.2214105506185,
            "unit": "iter/sec",
            "range": "stddev: 0.000015640828691152706",
            "extra": "mean: 1.3473068625952838 msec\nrounds: 655"
          }
        ]
      }
    ]
  }
}